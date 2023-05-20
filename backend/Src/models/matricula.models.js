const { Schema, model } = require( `mongoose` );

const matriculaSchema = new Schema({

  matriculaid:{
    type: Number,
    required: true,
  },

    fecha: {
        type: String,
        required: true
    },

    estudiantenombre1: {
        type: String,
        required: true
    },
    estudiantenombre2: {
        type: String,
        required: true
    },
    estudianteapellido1: {
        type: String,
        required: true
    },
    estudianteapellido2: {
        type: String,
        required: true
    },
    documentoestudiante: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    acudientenombre1: {
        type: String,
        required: true
    },
    acudientenombre2: {
        type: String,
        required: true
    },
    acudienteapellido1: {
        type: String,
        required: true
    },
    acudienteapellido2: {
        type: String,
        required: true
    },
    documentoacudiente: {
        type: String,
        required: true
    },

    profesornombre1: {
        type: String,
        required: true
    },
    profesorapellido1: {
        type: String,
        required: true
    },
    grupoperteneciente: {
        type: String,
        require: true,
        unique: true,
    },
    subnivel: {
        type: String,
        default: 0,
    },
},
        {timestamps: true}  
    );



module.exports = model('matricula', matriculaSchema);