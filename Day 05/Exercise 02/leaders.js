var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var leaderSchema = new Schema({
    name: {
        type: String
    },
    image: {
        type: String
    },
    designation: {
        type: String
    },
    abbr:{
        type: String
    },
    description: {
        type: String
    }
},{
    timestamps: true
});
var Leaders = mongoose.model('Leader',leaderSchema);
module.exports = Leaders;