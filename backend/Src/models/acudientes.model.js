const { Schema, model } = require( 'mongoose');

const acudientesSchema = new Schema({
    documentid:{
        type: String,
        required: true
    },
    name1:{
        type: String,
        required: true
    },
    name2:{
        type: String,
        required: true
    },
    lastname1:{
        type: String,
        require: true
    },
    lastname2:{
        type: String,
        require: true
    },
    parentezco:{
        type: String,
        require: true,
        unique: true
    },
    phonenumber:{
        type: Number,
        default: 0,
    },
    direction:{
        type: String,
       
    },
    estudiante:{
        type: String,
        required: true
    },

},
        {timestamps: true}  
    );
module.exports = model('acudientes', acudientesSchema);