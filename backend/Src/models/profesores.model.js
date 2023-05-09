const { Schema, model } = require('mongoose')


const userSchema = new Schema({
    Documentid:{
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
    email:{
        type: String,
        require: true,
        unique: true,
    },
    phonenumber:{
        type: Number,
        default: 0,
    },
    direction:{
        type: String,
        required: true
    },
},
    {
        timestamps: true
    });

    

module.exports = model('profesores', userSchema);