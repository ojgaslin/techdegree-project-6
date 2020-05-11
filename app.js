const express = require('express');
const projects = require('./data.json');
//Init app
const app = express();
const path = require('path');


//load view engine
app.set('view engine', 'pug');
app.use(express.static('public'));

// app.use((req, res, next) => {
//   const err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// })

// app.use((err, req, res, next) => {
// res.locals.error = err;
// res.status(err.status);
// res.render('error');
// });

//index page route
app.get('/index', (req, res, next) => {
 res.render('index', { projects });
 res.locals = data.projects;

});

//about page route
app.get('/about', (req, res) => {
 //response.send('test');
 res.render('about');
});

app.get('/test', (req, res) =>{
  res.json(projects[0]);
});

app.get('/projects/:id', function(req, res, next) {
   const projectId = req.params.id;
   const project = projects.find( ({ id }) => id === +projectId );
   if (project) {
   res.render('project', { project });
   } else {
     res.sendStatus(404);
   }
})

//start server
app.listen(3000, () => {
  console.log('App is listening to port 3000')
});

module.exports = app;
