const express = require('express');
const server = express();

server.use(express.json());

server.use((error, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        message: error.message,
        stack: error.stack
    });
});