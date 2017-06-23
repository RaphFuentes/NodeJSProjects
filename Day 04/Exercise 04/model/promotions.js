var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var currency = require('mongoose-currency');
currency.loadType(mongoose);

var Currency = mongoose.Types.Currency

var promotionSchema = new Schema({
    name: {
        type: String
    },
    image: {
        type: String
    },
    label: {
        type: String
    },
    price:{
        type: Currency
    },
    description: {
        type: String
    }
});

var Promotions = mongoose.model('promotion',promotionSchema);
module.exports = Promotions;