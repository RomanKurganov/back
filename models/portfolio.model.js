const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const PortfolioSchema = new Schema({
    url : {type: String, required: true},
    slider: Object,
    preview: Object,
    work: Object
});

const PortfolioModel = mongoose.model("portfolio", PortfolioSchema);
// module.getSchema = PortfolioSchema;
module.exports = PortfolioModel;
