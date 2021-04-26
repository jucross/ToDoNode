require('./config/config');

const express = require('express');
const mongoose = require('mongoose');

const app = express();
 
app.use(require('./routes/tarea'));
app.use(require('./routes/usuario'));

app.get('/', function (req, res) {
  res.send('funcionando');
})
 

mongoose.connect('mongodb://localhost:27017/todo',(err, res)=>{
    if(err) throw err;
    console.log('En linea');
});

app.listen(process.env.PORT , () => {
    console.log('Escucha puerto: ', process.env.PORT);
});