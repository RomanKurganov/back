const MongoClient = require('mongodb').MongoClient;
const dotenv = require('dotenv');
dotenv.config();

const mongoClient = new MongoClient(process.env.DATABASE, { useNewUrlParser: true });

module.exports = mongoClient;