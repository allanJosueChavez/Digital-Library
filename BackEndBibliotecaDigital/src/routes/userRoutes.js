'use strict'
const md_auth = require('../middlewares/authenticated');
const express = require('express');
const api = express.Router();

var userController = require('../controllers/userController');
// var bookController = require('../controllers/bookController');

//api.post('/commands/:action', controller.commands);
// api.post('/commands',md_auth.ensureAuth, userController.commands);
// api.post('/commands',md_auth.ensureAuth, bookController.commands);

api.post('/login', userController.login)
api.post('/addUser', userController.addUser);
api.put('/editUser/:idUser', userController.editUser);
api.delete('/deleteUser/:idUser', userController.deleteUser);
api.get('/getUserById/:idUser', userController.getUserById);
api.get('/getUsersById', userController.getUsersById);
api.get('/getUsersByName/:order', userController.getUsersByName);
api.get('/getUsersByLastName/:order', userController.getUsersByLastName);
api.get('/getUsersByCarnet_CUI/:order', userController.getUsersByCarnet_CUI);
api.get('/getUsersByRol/:order', userController.getUsersByRol);
api.get('/getUsersByPassword/:order', userController.getUsersByPassword);
api.get('/getUsers', userController.getUsers);


module.exports = api; 