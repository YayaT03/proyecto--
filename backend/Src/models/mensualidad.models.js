const { Schema, model } = require('mongoose')


const mensualidadSchema = new Schema({
    fecha:{
        type: String,
        required: true
    },
    descripcion:{
        type: String,
        require: true,
    },
    cantidad:{
        type: String,
        require: true,
        unique: true,
    },
    valorunitario:{
        type: Number,
        default: 0,
    },

    valortotal:{
        type: Number,
        default: 0,
    }
},
    {
        timestamps: true
    });

    

module.exports = model('mensualidad', mensualidadSchema);