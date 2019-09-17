const Portfolio = require("../models/portfolio.model");

/* получение всего перечня работ */
exports.get_portfolio = (req, res) => {
    Portfolio.find({})
        .then(portfolios => {
            res.status(200).json({data : portfolios})

        })
        .catch(err => {
            console.log(err)
        })
}

/* получение работы */
exports.get_portfolio_id = (req, res) => {
    Portfolio.find({}).then(listPortfolio => {
        Portfolio.findOne({url: req.params.id})
            .then(portfolio => {
                var indexPage = 0;
                if (listPortfolio) {
                    listPortfolio.forEach(function(item, index) {
                        if (item.url === portfolio.url) {
                            indexPage = index;
                            return false;
                        }
                    })
                    return res.status(200).json({
                        data: portfolio,
                        listPortfolio: listPortfolio,
                        indexPage
                    })
                }

            })
            .catch(err => {
                console.log(err)
            })
    });

}

