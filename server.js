var express = require('express');
var http = require('http');
var app = express();

var tareas = [
  {
    id: 1,
    title: 'Tarea1',
    description: 'loremp impsum',
    status: 'todo'
  },
  {
    id: 2,
    title: 'Tarea2',
    description: 'loremp impsum',
    status: 'todo'
  },
  {
    id: 3,
    title: 'Tarea3',
    description: 'loremp impsum',
    status: 'todo'
  },
  {
    id: 4,
    title: 'Tarea4',
    description: 'loremp impsum',
    status: 'doing'
  },
  {
    id: 5,
    title: 'Tarea5',
    description: 'loremp impsum',
    status: 'complete'
  }
];
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.get('/tareas', (req, res) => {
  //res.set('Content-Type', 'application/json')
  res.send(tareas);
});

app.get('/tareas/:id', (req, res) => {
  var result;
  tareas.forEach((element, index) => {
    if (element.id == req.params.id) {
      result = tareas[index];
    }
  });
  res.send(result);
});

app.get('/', (req, res) => {
  res.status(200).send('Welcome to the jungle!');
});

app.post('/tareas', (req, res) => {
  //console.log(req);
  tareas.push({
    id: tareas.length + 1,
    title: req.query.title,
    description: req.query.description,
    status: req.query.status
  });
  //tareas.push('User ' + tareas.length);
  //res.send("New user add")
  res.send(tareas);
});
app.patch('/tareas', (req, res) => {
  res.send('PATCH method');
});

app.delete('/tareas/:id', (req, res) => {
  console.log('id ' + req.params.id);
  var result = tareas.filter(element => {
    console.log('Dentro del filter:' + element.id + ' - ' + req.params.id);
    return element.id !== req.params.id;
  });
  //console.log('res ' + result);
  res.send(result);
});

http.createServer(app).listen(8001, () => {
  console.log('Server started at http://localhost:8001');
});
