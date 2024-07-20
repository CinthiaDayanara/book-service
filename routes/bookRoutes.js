const express = require('express');
const router = express.Router();
const Book = require('../models/book');

router.get('/api/books', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los libros', details: error.message });
  }
});

module.exports = router;
