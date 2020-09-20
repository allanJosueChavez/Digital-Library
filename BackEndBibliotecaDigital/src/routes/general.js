'use strict'
const md_auth = require('../middlewares/authenticated');
const express = require('express');
const api = express.Router();

var userController = require('../controllers/userController');
var bookController = require('../controllers/bookController');

//api.post('/commands/:action', controller.commands);
api.post('/commands',md_auth.ensureAuth, userController.commands);
api.post('/commands',md_auth.ensureAuth, bookController.commands);

module.exports = api; 