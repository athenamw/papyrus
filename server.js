const express = require('express');
const path = require('path');
const index = require('./routes/index');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/notes', notes);
app.use('/', index);

app.listen(PORT, () => console.log('Now listening'));
