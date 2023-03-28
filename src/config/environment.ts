import dotenv from 'dotenv';
dotenv.config({ path: './.env' });

export default {
  port: process.env.PORT || '9000',
  baseUrl:
    process.env.BASE_URL || `https://localhost:${process.env.PORT || '9000'}`,
  secret: process.env.SECRET || 'secret',
  clientID: process.env.CLIENT_ID || '1b0b1e2b-308d-4c21-8de0-617453cd4665',
  clientSecret: process.env.CLIENT_SECRET || "CSG8Q~-Aom8CBHiU2Vo1rv2AsuYzoSFdN0Rhda2i"
};
