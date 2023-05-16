const { Schema, model } = require('mongoose')
//const mongoosePaginate = require('mongoose-paginate-v2');

const subnivelSchema = new Schema({
    tipo:{
        type: String,
        required: true
    },
   
    
},
    {
        timestamps: true
    });

    //userSchema.plugin(mongoosePaginate)

module.exports = model('subnivels', subnivelSchema);