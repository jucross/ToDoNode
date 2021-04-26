const express = require('express');

const Usuario = require('../models/usuario');

const app = express();

app.get('/usuario',function (req, res){
    res.json({
        ok:true
    }); 
});

app.post('/usuario',function (req, res){
    res.json({
        ok:true
    }); 
});

app.put('/usuario/:id',function (req, res){
    res.json({
        ok:true
    }); 
});

app.delete('/usuario/:id',function (req, res){
    res.json({
        ok:true
    }); 
});

module.exports = app;