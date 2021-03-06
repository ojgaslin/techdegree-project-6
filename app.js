const express = require('express');
const projects = require('./data.json');
const path = require('path');
const bodyParser = require('body-parser');
//const cookieParser = require('cookie-parser');
//Init app
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
//app.use(cookieParser());
app.use(express.static('public'));
//load view engine
app.set('view engine', 'pug');

//home route
app.get('/', (req, res, next) => {
  res.render('index', { projects });
  locals = data.projects;

});
//index page route
app.get('/index', (req, res, next) => {
 res.render('index', { projects });
 res.locals = projects;

});

//about page route
app.get('/about', (req, res) => {
 //response.send('test');
 res.render('about', { projects });
});


app.get('/projects/:id', function(req, res, next) {
   const projectId = req.params.id;
   const project = projects.find( ({ id }) => id === +projectId );
   if (project) {
   res.render('project', { project });
   } else {
     next();
   }
})

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err,req, res, next) => {
   res.locals.error = err;
   res.status(err.status);
   res.render('error', err);
});

//start server
app.listen(3000, () => {
  console.log('App is listening to port 3000')
});

module.exports = app;
