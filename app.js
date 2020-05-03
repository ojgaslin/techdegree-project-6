const express = require('express');
const app = express.Router();
const path = require('path');



app.set('view engine', 'pug');

const { projects } = require('data.json');

app.use(express.static('public'));

app.get('/index', (req, res, next) => {
 res.render('index', { projects });
 res.locals = data.projects;
 res.render('Home');
});

app.get('/about', (req, res) => {
 response.send('test');
 res.render('about');
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

app.listen(3000, () => {
  console.log('App is listening to port 3000')
});

module.exports = app;
