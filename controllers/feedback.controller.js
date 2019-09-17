const config = require("../service/mailer");

/* отправлние почты */
exports.send_mail = (req, res) => {
    var transport = config.getConfig();
    var data = req.body.message;
    var message = {
        from: data.email,
        to: process.env.EMAIL,
        subject: "Письмо от пользователя: " + data.email,
        html: "<div>" +
            "<div><b>Пользователь: " + data.name + "</b></div>" +
            "<div><b>Почта: " + data.email + "</b></div>" +
            "<div><b>Сообщение: " + (data.comment || '') + "</b></div>"
    };
    transport.sendMail(message, (error) => {
        if (error) {
            return res.status(201).json({
                'textMessage' : 'На сервере произошла ошибка!',
                'statusMessage' : false
            })
        }
        return res.status(200).json({
            'textMessage' : 'Спасибо, мы получили Ваше сообщение, все отлично!',
            'statusMessage' : true
        })
    });
};