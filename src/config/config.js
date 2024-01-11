const dotenv = require('dotenv')
dotenv.config()

const config = {
  port: parseInt(process.env.DB_DEV_PORT),
  dbconfig: {
    server: process.env.DB_DEV_SERVER,
    pool: {
      max: 5,
      min: 1,
      idleTimeoutMillis: 30000,
    },
    options: {
    port: parseInt(process.env.DB_DEV_PORT),
      encrypt: false,
      database: process.env.DB_DEV_DATABASE,
      trustServerCertificate: true,
    },
    authentication: {
      type: 'default',
      options: {
        userName: process.env.DB_DEV_USERNAME,
        password: process.env.DB_DEV_PASSOWRD,
      },
    },
  },
};

module.exports = config