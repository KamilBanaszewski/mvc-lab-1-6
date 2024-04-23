const Book = require('../models/Book');

exports.getBooksList = (req, res) => {
    const userId = req.session.userId;
    if (!userId) {
        res.render('books', { title: 'Books', message: 'Sorry, you cannot access library without login into the system.' });
    } else {
        const books = Book.getAll();
        res.render('books', { title: 'Books', userId, books });
    }
};
