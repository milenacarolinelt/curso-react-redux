const express = require('express');

module.exports = function(server) {

    // API Routes
    const router = express.Router();
    server.use('/api', router);

    // TODO Routes
    const todoServide = require('../api/todo/todoService');
    todoServide.register(router, '/todos');
}