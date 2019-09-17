const mongoClient = require('../database.config');
const pathUrl = 'http://localhost:4000/resource/';
var portfolios = [
    {
        url : 'citis',
        title: 'Сайт ЦИТИС',
        slider: {
            image: pathUrl + 'citis/' + 'slider.png'
        },
        preview: {
            image: pathUrl + 'citis/' + 'preview.png',
            tags: [{name:'верстка'}, {name:'дизайн'}],
        },
        work: {
            title: 'сайт <span>цитис</span>',
            short_description: 'Дизайн и верстка СЭД (система электронного документооборота).',
            banner: pathUrl + 'citis/' + 'banner.png',
            image: pathUrl + 'citis/' + 'portfolio.png',
            long_description: 'Разработка UX UI. Отрисованы макеты. Созданы интерактивные прототипы. Верстка СЭД.'
        }
    },
    {
        url: 'archk',
        title : 'Сайт АРЧК',
        slider: {
            image: pathUrl + 'archk/' + 'slider.png'
        },
        preview: {
            image: pathUrl + 'archk/' + 'preview.png',
            tags: [{name:'верстка'}, {name:'дизайн'}]
        },
        work: {
            title: 'сайт <span>арчк</span>',
            short_description: 'Дизайн и верстка сайта для Агенства по развитию человеческого капитала.',
            banner: pathUrl + 'archk/' + 'banner.png',
            image: pathUrl + 'archk/' + 'portfolio.png',
            long_description:'Проведено UX исследование. Составлен UI kit. Верстка сайта по подготовленным макетам.'
        }
    },
    {
        url : 'btc',
        title : 'Сайт BTCOINNEX',
        slider: {
            image: pathUrl + 'btc/' + 'slider.png'
        },
        preview: {
            image: pathUrl + 'btc/' + 'preview.png',
            tags: [{name:'верстка'}, {name:'дизайн'}]
        },
        work: {
            title: 'сайт <span>BTCOINNEX</span>',
            short_description: 'Дизайн и верстка сайта по криптовалютам. Мобильная и десктопная версия.',
            banner: pathUrl + 'btc/' + 'banner.png',
            image: pathUrl + 'btc/' + 'portfolio.png',
            long_description: 'Сайт создавался с нуля. Был проведен анализ конкурентов, разработан UI kit и отрисованы макеты.' +
                ' Интерактивный прототип в InVision и верстка сайта.'
        }
    },
    {
        url : 'coquette',
        title : 'Сайт Coquette',
        slider: {
            image: pathUrl + 'coquette/' + 'slider.png'
        },
        preview: {
            image: pathUrl + 'coquette/' + 'preview.png',
            tags: [{name:'верстка'}, {name:'дизайн'}]
        },
        work: {
            title: 'сайт <span>Coquette</span>',
            short_description: 'Подготовка проекта к выставке. Web и полиграфическая продукция.',
            banner: pathUrl + 'coquette/' + 'banner.png',
            image: pathUrl + 'coquette/' + 'portfolio.png',
            long_description: 'Разработка Брендбука. Дизайн и верстка сайта. Создание полиграфической продукции.'
        }
    },
    {
        url : 'flerika',
        title : 'Сайт Flerika',
        slider: {
            image: pathUrl + 'flerika/' + 'slider.png'
        },
        preview: {
            image: pathUrl + 'flerika/' + 'preview.png',
            tags: [{name:'верстка'}, {name:'дизайн'}]
        },
        work: {
            title: 'сайт <span>flerika</span>',
            short_description: 'Интернет-магазин онлайн-покупок. Работа с сайтом и приложением.',
            banner: pathUrl + 'flerika/' + 'banner.png',
            image: pathUrl + 'flerika/' + 'portfolio.png',
            long_description:'UX исследование. Разработка Брендбука. Отрисовка персонажей. Верстка.'
        }
    },
    {
        url: 'portal',
        title: 'Портал АРЧК',
        slider: {

            image: pathUrl + 'portal/' + 'slider.png'
        },
        preview: {
            image: pathUrl + 'portal/' + 'preview.png',
            tags: [{name:'верстка'}, {name:'дизайн'}]
        },
        work: {
            title: 'портал <span>арчк</span>',
            short_description: 'Дизайн и верстка сайта и приложения Онлайн-сервис для кадрового агенства.',
            banner: pathUrl + 'portal/' + 'banner.png',
            image: pathUrl + 'portal/' + 'portfolio.png',
            long_description: 'Сайт и приложение разрабатывались для привлечения человеческого капиталла на Дальний Восток. Был создан портал для поиска сотрудников.'
        }
    },
    {
        url: 'rsk',
        title: 'Проект RSK-Holding',
        slider: {
            image: pathUrl + 'rsk/' + 'slider.png'
        },
        preview: {
            image: pathUrl + 'rsk/' + 'preview.png',
            tags: [{name:'верстка'}, {name:'дизайн'}]
        },
        work: {
            title: 'Проект <span>RSK-Holding</span>',
            short_description: 'Сайт и приложение разрабатывались для освещения спортивных событий в Московских регионах.',
            banner: pathUrl + 'rsk/' + 'banner.png',
            image: pathUrl + 'rsk/' + 'portfolio.png',
            long_description: 'Разработка дизайна для веб-студии RSK-Holding. Анализ конкурентов. Верстка и техподдержка.'
        }
    },
    {
        url : 'sport',
        title : 'Сайт ЖИВУ СПОРТОМ',
        slider: {
            image: pathUrl + 'sport/' + 'slider.png'
        },
        preview: {
            image: pathUrl + 'sport/' + 'preview.png',
            tags: [{name:'верстка'}, {name:'дизайн'}]
        },
        work: {
            title: 'сайт <span>живу спортом</span>',
            short_description: 'Дизайн и верстка сайта и приложения. Спортивные события. Лента новостей.',
            banner: pathUrl + 'sport/' + 'banner.png',
            image: pathUrl + 'sport/' + 'portfolio.png',
            long_description: 'Сайт и приложение разрабатывались для освещения спортивных событий в Московских регионах.'
        }
    },
    {
        url : 'nris',
        title : 'Сайт N\'RIS',
        slider: {
            image: pathUrl + 'nris/' + 'slider.png'
        },
        preview: {
            image: pathUrl + 'nris/' + 'preview.png',
            tags: [{name:'разработка'}],
        },
        work: {
            title: 'сайт <span>N\'RIS</span>',
            short_description: 'Профессиональный цифровой клуб, объединяющий владельцев и пользователей интеллектуальной собственности.',
            banner: pathUrl + 'nris/' + 'banner.png',
            image: pathUrl + 'nris/' + 'portfolio.png',
            long_description: 'Участие в верстке и разработке сайта по интеллектуальной собственности'
        }
    }
];

mongoClient.connect(function (err, client) {
    const db = client.db("project_db");
   const collection = db.collection("portfolios");
   collection.drop(function (err, result) {
       console.log('Записи успещно удалены!', result)
       client.close();

   });
   collection.insertMany(portfolios, function (err, result) {
       if (err) {
           return console.log(err);
       }
       console.log('Записи успешно добавлены!', result)
       client.close();
   })
});
