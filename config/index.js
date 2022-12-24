require('dotenv').config();

require('dotenv').config();

module.exports={
    NAME:process.env.APP_NAME,
    PORT:process.env.APP_PORT,
    DB_URL:process.env.APP_DB,
    SECRATE:process.env.APP_SESSION_SECRET
}

