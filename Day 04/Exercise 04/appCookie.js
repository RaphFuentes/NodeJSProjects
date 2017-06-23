var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose=require('mongoose');
mongoose.Promise = require('bluebird');

var index = require('./routes/index');
var users = require('./routes/users');

var Dishes = require('./model/dishes');
var Leaders = require('./model/leaders');
var Promotions = require('./model/promotions') ;


var dishRouter = require('./routes/dishRouter');
var promoRouter = require('./routes/promoRouter');
var leaderRouter = require('./routes/leaderRouter');

var app = express();

var url="mongodb://127.0.0.1:27017/conFusion";
mongoose.connect(url);

var db=mongoose.connection;

db.on('error',function(){
    console.log("error");
});

db.once('open', function(){
    console.log("Connected successfully");
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(cookieParser('12345-67890-09876-54321'));
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(auth);




function auth(req,res,next){
  if(!req.signedCookies.user){
    console.log(req.headers);
    var authHeaders = req.headers.authorization;
    if(!authHeaders){
      var err = Error("You are not authenticated");
      err.status = 401;
      next(err);
      return;
    }
    var auth = new Buffer(authHeaders.split(' ')[1],'base64').toString().split(":");
    var user = auth[0];
    var password = auth[1];
    if(user === 'admin' && password === 'password'){
      //If the user is authenticated
      res.cookie('user','admin',{signed: true});
      next(); //authenticated
    }
    else{
      var err = Error("You are not authenticated");
      err.status = 401;
      next(err);
    }
  }else{
  console.log(req.signedCookies);
  if(req.signedCookies.user == 'admin'){
    next();
  }
  else{
    var err = Error("You are not authenticated");
      err.status = 401;
      next(err);
  }
  }
}
//Error Handler

app.use(function(err, req, res,next){
  res.writeHead(err.status || 500,{
    'WWW-authenticate': 'Basic',
    'Content-Type': 'text/plain'
  });
  res.end(err.message);
});



app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use("/dishes",dishRouter);
app.use("/leadership",leaderRouter);
app.use("/promotions",promoRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
