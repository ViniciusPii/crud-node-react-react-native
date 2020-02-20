const express = require('express');
const UserController = require('../src/controllers/UserController');

const routes = new express.Router();

routes.post('/create', UserController.creteUser);
routes.get('/list', UserController.listUsers);
routes.put('/update/:id', UserController.updateUser);
routes.delete('/user/:id', UserController.deleteUser);

module.exports = routes;