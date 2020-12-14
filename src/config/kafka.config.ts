export default {
  url: '',
  clientId: 'my-app',
  groupId: '2',
  brokers: ['kafka1:9092', 'kafka2:9092'],
  kafkaHost: 'localhost:9092',
  topic: 'test',
  partitionMaxIndex: 0, //Producer发送数据时分区范围(0,partitionCount
};
