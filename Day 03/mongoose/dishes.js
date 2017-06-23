var Mongoose = require('mongoose');

var Schema = Mongoose.Schema;

var dishSchema = new Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    description:{
        type: String,
        required: true
    }
},{
    timestamps: true
});

var Dishes = Mongoose.model('dish', dishSchema);

module.exports= Dishes;