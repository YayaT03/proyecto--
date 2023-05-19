const { Schema, model } = require( `mongoose` );

const grupoSchema = new Schema({
    genero:{
        type: String,
        required: true
    },
    profesorname1:{
        type: String,
        required: true
    },
    profesorname2:{
        type: String,
        required: true
    },
    profesorlastname1:{
        type: String,
        required: true
    },
    profesorlastname2:{
        type: String,
        required: true
    },
    cantidadestudiantes:{
        type: Number,
        required: true
    },
        timestamps: true 
    });

    //userSchema.plugin(mongoosePaginate)

module.exports = model('grupo', grupoSchema);