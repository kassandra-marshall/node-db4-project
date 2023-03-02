const express = require('express');
const server = express();
const recipesRouter = require('./recipes/recipes-router')

server.use(express.json());

server.use('/api/recipes', recipesRouter);

server.use('*', (req, res, next) => {// eslint-disable-line
    res.json({ api: 'up' })
})

server.use((error, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        message: error.message,
        stack: error.stack
    });
});
module.exports = server;