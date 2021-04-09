require('dotenv').config();

const config = {

dev: process.env.NODE_ENV !== 'production',  
PORT: process.env.PORT,

//MongoDB
DB_USERM: process.env.DB_USERM,
DB_PASSWORDM: process.env.DB_PASSWORDM,
DB_HOSTM: process.env.DB_HOSTM,
DB_PORTM: process.env.DB_PORTM,
DB_NAMEM: process.env.DB_NAMEM,


authAdminUsername: process.env.AUTH_ADMIN_USERNAME,
authAdminPassword: process.env.AUTH_ADMIN_PASSWORD,
authAdminEmail: process.env.AUTH_ADMIN_EMAIL,
}

module.exports = { config };

