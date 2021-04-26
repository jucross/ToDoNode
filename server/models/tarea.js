const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let tareaSchema = new Schema({
    descripcion:{
        type: String,
        required: [true,'Requerido']
    },
    terminado:{
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Tarea',tareaSchema);

