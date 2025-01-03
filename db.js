const { MongoClient } = require('mongodb');
const config = require('./config');

const client = new MongoClient(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectDB() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
        return client.db();
    } catch (err) {
        console.error('Failed to connect to MongoDB', err);
        process.exit(1);
    }
}

module.exports = connectDB;
