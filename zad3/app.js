const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const bookRoutes = require('./routes/book');
const userRoutes = require('./routes/user');

const errorController = require('./controllers/error');

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true
}));

app.use('/user', userRoutes);
app.use('/books', bookRoutes);

app.use('*', errorController.getNotFoundPage);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
