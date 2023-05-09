const { Schema, model } = require('mongoose')


const userSchema = new Schema({
    documentid:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        require: true,
    },
    parentezco:{
        type: String,
        require: true,
        unique: true,
    },
    phonenumber:{
        type: Number,
        default: 0,
    },
    estudiante:{
        type: String,
        required: true
    },
},
    {
        timestamps: true
    });

    

module.exports = model('acudientes', userSchema);