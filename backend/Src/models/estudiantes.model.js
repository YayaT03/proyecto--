const { Schema, model } = require("mongoose");

const estudiantesSchema = new Schema({
    documentid: {
        type: Number,
        default: 0,
        required: true
    },
    name1: {
        type: String,
        required: true
    },
    name2: {
        type: String,
        required: true
    },
    lastname1: {
        type: String,
        require: true,
    },
    lastname2: {
        type: String,
        required: true
    },
    email: {
        type: String,
        require:true,
        unique: true,
    },
    phonenumber: {
        type: Number,
        default: 0,
    },
    direction: {
        type: String,

    },
    edad: {
        type: String,

    },
    fechadenacimiento: {
        type: String,

    },

    acudientes: [{type: Schema.Types.ObjectId, ref: "acudientes" } ],

},
    { timestamps: true }

);

module.exports = model(`estudiantes`, estudiantesSchema);