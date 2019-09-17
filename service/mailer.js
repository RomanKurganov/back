const nodemailer = require("nodemailer");


//Настройки почтового клиента
exports.getConfig = () => {
    return nodemailer.createTransport({
        host: process.env.AUTH_MAIL_HOST,
        port: process.env.AUTH_MAIL_PORT,
        secure: false,
        auth: {
            user: process.env.AUTH_MAIL_USER,
            pass: process.env.AUTH_MAIL_PASS
        }
    });
}
