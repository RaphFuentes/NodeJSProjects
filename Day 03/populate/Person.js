var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;
var PersonSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
});
var Person = Mongoose.model('Person', PersonSchema);
module.exports = Person;