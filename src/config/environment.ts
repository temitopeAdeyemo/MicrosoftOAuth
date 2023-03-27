import dotenv from 'dotenv';
dotenv.config({ path: './.env' });

export default {
  port: process.env.PORT || '9000',
  baseUrl: process.env.BASE_URL || `https://localhost:${process.env.PORT || '9000'}`,
};


