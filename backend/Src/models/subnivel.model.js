const { Schema, model } = require( `mongoose` );

const subnivelSchema = new Schema({
    nivel:{
        type: String,
        required: true
    },
    Genero:{
        type: String,
        required: true
    },
   
    
},
    {
        timestamps: true
    });

    //userSchema.plugin(mongoosePaginate)

module.exports = model('subnivels', subnivelSchema);