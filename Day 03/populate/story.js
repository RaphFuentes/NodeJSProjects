var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;
var StorySchema = new Schema({
    _creator: { type: Schema.ObjectId, ref: 'Person' }
    , title: { type: String }
});
var Story = Mongoose.model('story', StorySchema);
module.exports = Story;