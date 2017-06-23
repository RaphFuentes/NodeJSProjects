var express = require('express');

var dishRouter = require('./dishRouter');
var promoRouter = require('./promoRouter');
var leaderRouter = require('./leaderRouter');


var app = express();

var mongoose=require('mongoose');

mongoose.Promise = require('bluebird');

var Dishes = require('./model/dishes');
var Leaders = require('./model/leaders');
var Promotions = require('./model/promotions') ;

var url="mongodb://127.0.0.1:27017/conFusion";
mongoose.connect(url);

var db=mongoose.connection;

db.on('error',function(){
    console.log("error");
});

db.once('open', function(){
    console.log("Connected successfully");
});
app.use("/dishes",dishRouter);
app.use("/leadership",leaderRouter);
app.use("/promotions",promoRouter);

app.listen(3000,function(){
    console.log("Server started");
})

