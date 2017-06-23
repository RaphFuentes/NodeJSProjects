var mongoose = require('mongoose');
var commentSchema = require('./commentSchema');

var Schema = mongoose.Schema;

var dishSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    comments: [commentSchema.CommentSchema]
}, {
        timestamps: true
    });

var Dishes = mongoose.model('Dish', dishSchema);

module.exports = Dishes;