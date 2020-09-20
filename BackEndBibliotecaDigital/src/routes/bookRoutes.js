'use strict'
const md_auth = require('../middlewares/authenticated');
const express = require('express');
const api = express.Router();

var bookController = require('../controllers/bookController');

api.post('/addBook', bookController.addBook);
api.put('/editBook/:idBook', bookController.editBook);
api.delete('/deleteBook/:idBook', bookController.deleteBook);
api.get('/getBookById/:idBook', bookController.getBookById);
api.get('/getBookByTittle/:tittle', bookController.getBookByTittle);
api.get('/getBookByTopics/:topics', bookController.getBookByTopics);
api.get('/getBookByKeyWords/:keyword', bookController.getBookByKeyWords);
api.get('/getBooksById/:order', bookController.getBooksById);
api.get('/getBooksByCopies/:order', bookController.getBooksByCopies);
api.get('/getBooksByAvaliables/:order', bookController.getBooksByAvaliables);
api.get('/getBooks', bookController.getBooks);


module.exports = api; 