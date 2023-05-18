const { Schema, model } = require( `mongoose` )


const estudiantesSchema = new Schema({
    documentid:{
        type: Number,
        default: 0,
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
        require: true,
    },
    lastname2:{
        type: String,
        required: true
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
    edad:{
        type: String,
        required: true
    },
    fechadenacimiento:{
        type: String,
        required: true
    },
},
    {
        timestamps: true
    });

    

module.exports = model('estudiantes', estudiantesSchema);