const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let usuarioSchema = new Schema({

    usuario:{
        type: String,
        required: [true,'Requerido']
    },
    pass:{
        type: String,
        required: [true,'Requerido']
    }
});

module.exports = mongoose.model('Usuario',usuarioSchema);