const { Schema, model } = require('mongoose')


const userSchema = new Schema({
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
    salary:{
        type: Number,
        default: 0,
    },
},
    {
        timestamps: true
    });

    

module.exports = model('users', userSchema);