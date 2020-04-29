const express = require('express');

const path = require('path');

const app = express();

app.set('view engine', 'pug');

const data = require('data.json');

app.use(express.static('public'));

app.get('/index', (req, res) => {
 response.send('test');
 res.locals = data.projects;
 res.render('Home');
});

app.get('/about', (req, res) => {
 response.send('test');
 res.render('about');
});


app.listen(3000, () => {
  console.log('App is listening to port 3000')
});
