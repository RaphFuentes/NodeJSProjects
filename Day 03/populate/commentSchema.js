var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var commentSchema = new Schema({
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
}, {
        timestamps: true
    });

var CommentSchema = mongoose.model('CommentSchema', commentSchema);

module.exports = CommentSchema;