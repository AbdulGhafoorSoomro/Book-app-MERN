const express = require('express');

const router = express.Router(); 
const Book = require('../model/Book') 
const bookcontroller = require('../controllers/books-controllers')

router.get("/", bookcontroller.getAllBooks);
router.get("/:id", bookcontroller.getBookById)
router.post('/',bookcontroller.addBook);
router.put('/:id', bookcontroller.updateBook)
router.delete('/:id',bookcontroller.deleteBook)

module.exports = router


