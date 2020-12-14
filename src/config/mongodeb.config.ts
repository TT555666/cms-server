export default {
  host: process.env.MONGO_HOST,
  port: Number(process.env.MONGO_PORT),
  username: process.env.MONGO_USERNAME,
  password: process.env.MONGO_PASSWORD,
  name: process.env.MONGO_NAME,
  type: process.env.MONGO_TYPE,
  database: process.env.MONGO_DATABASE,
  url: process.env.MONGO_URL,
  logging: true,
};
