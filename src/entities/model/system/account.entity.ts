import { Column, Entity, BeforeInsert } from 'typeorm';
import { Exclude, Expose } from 'class-transformer';
import * as jwt from 'jsonwebtoken';
import NodeAuth from 'node-auth0';
import { ObjectType } from '@src/types';
import { PublicEntity } from '../public.entity';
// 如果要为User实体使用替代表名，可以在@ Entity中指定：@Entity（“my_users”）。 如果要为应用程序中的所有数据库表设置基本前缀，可以在连接选项中指定entityPrefix。
// https://www.bookstack.cn/read/TypeORM-0.2.20-zh/entities.md
@Entity('account')
export class AccountEntity extends PublicEntity {
  // Sometimes you want to skip some properties during transformation. This can be done using @Exclude decorator:
  @Exclude()
  private nodeAuth: NodeAuth;
  constructor() {
    super();
    this.nodeAuth = new NodeAuth();
  }
  // 要添加数据库列，你只需要将要生成的实体属性加上@Column装饰器。 参考https://www.bookstack.cn/read/TypeORM-0.2.20-zh/spilt.3.spilt.3.README.md
  @Column('varchar', {
    // nullable: boolean - 设置列值NULL或NOT NULL。默认值是 nullable: false。
    nullable: false,
    length: 50,
    name: 'username',
    comment: '用户名',
  })
  username: string;

  @Exclude() // 表示排除字段不返回给前端
  @Column('varchar', {
    nullable: false,
    length: 100,
    name: 'password',
    comment: '密码',
  })
  password: string;

  @Column('int', {
    nullable: true,
    name: 'platform',
    comment: '平台',
  })
  platform: number;
  //   从 0 到 255 的整型数据。存储大小为 1 字节。
  @Column('tinyint', {
    nullable: false,
    default: () => 0,
    name: 'is_super',
    comment: '是否为超级管理员1表示是,0表示不是',
  })
  isSuper: number;

  /**
   * @Description: 插件数据库前先给密码加密
   * @param {type}
   * @return:
   */
  //   你可以在实体中定义任何名称的方法，并使用@BeforeInsert标记，TypeORM 将在使用 repository/managersave插入实体之前调用它。 参考https://www.bookstack.cn/read/TypeORM-0.2.20-zh/spilt.4.decorator-reference.md
  @BeforeInsert()
  makePassword() {
    this.password = this.nodeAuth.makePassword(this.password);
  }

  /**
   * @Description: 检查密码是否正确
   * @param {type}
   * @return:
   */
  checkPassword(password: string, sqlPassword: string) {
    return this.nodeAuth.checkPassword(password, sqlPassword);
  }
  /**
   * @Description: 生产token签名
   * @param {type}
   * @return:
   */
  @Expose()
  private get token() {
    const { id, username, isSuper } = this;
    // 生成签名
    return jwt.sign(
      {
        id,
        username,
        isSuper,
      },
      process.env.SECRET, // 加盐
      {
        expiresIn: '7d', // 过期时间
      },
    );
  }

  /**
   * @Description: 定义返回数据,用了这个函数后上面的Exclude和Expose就失效了
   * @param {type}
   * @return:
   */
  public toResponseObject(isShowToken = true): Record<string, unknown> {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { nodeAuth, password, token, isDel, ...params } = this;
    const responseData: ObjectType = {
      ...params,
    };
    if (isShowToken) {
      return Object.assign(responseData, { token });
    } else {
      return responseData;
    }
  }
}
