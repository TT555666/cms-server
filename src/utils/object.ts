import { ObjectType } from '@src/types';

/**
 *
 * @param data 传入对象
 * @description 过滤对象中空的提交到后台
 */
export const fileObjectField = (
  data: Record<string, any>,
): Record<string, any> => {
  return Object.keys(data).reduce((cur, next) => {
    if (data[next] || /^\d+$/.test(data[next])) {
      cur[next] = data[next];
    }
    return cur;
  }, {});
};
/**
 *
 * @param data
 * @description 处理数据
 */
export const channelObject = (data: ObjectType): ObjectType => {
  return decodeObject(fileObjectField(trimObject(data)));
};

/**
 *
 * @param data
 * @description  将前端使用encodeURL转义的字符转换回来
 */
export const decodeObject = (data: Record<string, any>): ObjectType => {
  return Object.keys(data).reduce((cur, next) => {
    cur[next] = decodeURI(data[next]);
    return cur;
  }, {});
};
/**
 *
 * @param data
 * @description 去除对象value的前后空格
 */
export const trimObject = (data: ObjectType): ObjectType => {
  return Object.keys(data).reduce((cur, next) => {
    cur[next] = isNaN(data[next]) ? data[next].trim() : data[next];
    return cur;
  }, {});
};
