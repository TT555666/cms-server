export default {
  name: 'cms-nest-redis',
  db: 1,
  seckillCounterKey: 'secKillCounter', //库存计数器key
  seckillHashKey: 'seckill-temp',
  seckillTempLockKey: 'lock-seckill-update', //同步锁的键
  host: 'localhost',
  port: 6379,
  duration: 30 * 1000, //数据库查询缓存时间30s,
};
