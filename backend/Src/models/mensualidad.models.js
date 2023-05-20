const { Schema, model } = require( `mongoose` );


const mensualidadSchema = new Schema({
    idmensualidad:{
        type: Number,
        require: true,
    },
    name1:{
        type: String,
        required: true,
    },
    name2:{
        type: String,
        required: true,
    },
    lastname1:{
        type: String,
        required: true,
    },
    lastname2:{
        type: String,
        required: true,
    },
    grupo:{
        type: String,
        required: true,
    },
    subnivel:{
        type: String,
        required: true,
    },
    
    fecha:{
        type: String,
        
    },
    descripcion:{
        type: String,
       
    },
    cantidad:{
        type: String,
        unique: true,
    },
    valorunitario:{
        type: Number,
        default: 0,
    },

    valortotal:{
        type: Number,
        default: 0,
    },
},
        {timestamps: true}  
    );

    

module.exports = model('mensualidad', mensualidadSchema);