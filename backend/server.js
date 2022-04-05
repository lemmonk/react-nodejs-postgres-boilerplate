// load .env data into process.env
require('dotenv').config();

// Web server config
const PORT = 8080;
const ENV = process.env.NODE_ENV || 'development';
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.enable('trust proxy');
const morgan = require('morgan');
const cookieSession = require('cookie-session');
const methodOverride = require('method-override');

// PG database client/connection setup
const db = require('./lib/db.js');
db.connect();

//color codes terminal output
app.use(morgan('dev'));

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(
	cookieSession({
		name: 'session',
		keys: ['ses1', 'ses2', 'ses3'],
	})
);

// override for put, patch and delete methods
app.use(methodOverride('_method'));

// Separated Routes for each Resource
const usersRouter = require('./routes/api/users.js');

// Mount all resource routes
app.use('/api/users', usersRouter);

// Main routes
app.get('/', (req, res) => {
	res.send('Brave New World');
});


app.listen(PORT, () => {
	console.log(`Listening on PORT ${PORT}`);
});
