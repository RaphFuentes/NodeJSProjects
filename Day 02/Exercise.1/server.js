var express = require('express');
var bodyParser = require('body-parser');
var dishRouter = require('./dishRouter');
var promoRouter = require('./promoRouter');
var leaderRouter = require('./leaderRouter');


var app = express();
app.set('port', 3000);

var appRouter = express.Router();

dishRouter(appRouter);
leaderRouter(appRouter);
promoRouter(appRouter);

app.use(bodyParser.json()).use('/', appRouter).listen(app.get('port'), function(){
    console.log("Server has started at port: ", app.get('port'));
});