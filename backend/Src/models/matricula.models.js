const { Schema, model } = require('mongoose')


const matriculaSchema = new Schema({
    estudiante:{
        type: String,
        required: true
    },
    acudiente:{
        type: String,
        require: true,
    },
    grupo:{
        type: String,
        require: true,
        unique: true,
    },
    subnivel:{
        type: Number,
        default: 0,
    },
},
    {
        timestamps: true
    });

    

module.exports = model('matricula', matriculaSchema);