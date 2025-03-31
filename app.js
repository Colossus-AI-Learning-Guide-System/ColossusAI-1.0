const express = require('express');
const connectDB = require('./db');

const app = express();

async function startServer() {
    const db = await connectDB();
    // ...existing code...
    // Use the `db` object to interact with the database
    // ...existing code...
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
}

startServer();
