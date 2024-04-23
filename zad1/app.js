const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');

const errorRoutes = require('./routes/error');

const errorController = require('./controllers/error');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));

app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: true
}));

app.use("*", errorRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
