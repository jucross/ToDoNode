const express = require('express');

const Tarea = require('../models/tarea');

const app = express();

app.get('/tarea',function (req, res){
    res.json({
        ok:true
    });    
});

app.post('/tarea',function (req, res){
    res.json({
        ok:true
    }); 
});

app.put('/tarea/:id',function (req, res){
    res.json({
        ok:true
    }); 
});

app.delete('/tarea/:id',function (req, res){
    res.json({
        ok:true
    }); 
});

module.exports = app;