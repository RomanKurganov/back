const express = require("express");
const router = express.Router();
const PortfolioController = require("../controllers/portfolio.controller");
const FeedbackController = require("../controllers/feedback.controller");


router.get("/", PortfolioController.get_portfolio);

router.get("/portfolio/:id", PortfolioController.get_portfolio_id);

router.post("/send-mail", FeedbackController.send_mail);

module.exports = router;
