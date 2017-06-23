var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var session = require('express-session');
var FileStore = require(');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var dishRouter = require('./routes/dishRouter');
var leaderRouter = require('./routes/leaderRouter');
var promoRouter = require('./routes/promoRouter');

var Dishes = require('./model/dishes');
var Leaders = require('./model/leaders');
var Promotions = require('./model/promotions');

var app = express();


var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var url = "mongodb://127.0.0.1:27017/conFusion";
mongoose.connect(url);

var db = mongoose.connection;

db.on('error', function () {
  console.log("error");
});

db.once('open', function () {
  console.log("Connected successfully");
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(session({
  name: 'session-id',
  secret: '12345-67890-09876-54321',
  saveUninitialized: true,
  resave: true,
  maxAge: 5,
  store: new FileStore()
}));

app.use(auth);


function auth(req, res, next) {
//console.log(req.headers);
//if (!req.signedCookies.user) {
  if(!req.session.user){
      console.log("No session user");
    
    var authHead = req.headers.authorization;
    if (!authHead) {
      console.log('No auth')
      var err = Error("Not authenticated")
      err.status = 401;
      next(err);
      return;
    }

    var auth = new Buffer(authHead.split(' ')[1], 'base64').toString().split(":");
    var user = auth[0];
    var pass = auth[1];
    if (user === 'admin' && pass === 'password') {
      console.log("Creating session user");
      //res.cookie('user', 'admin', { signed: true, maxAge: 5, httpOnly: true });
      req.session.user = user;
      next();
    }
    else {
      console.log('Wrong auth')
      var err = Error("Not authenticated")
      err.status = 401;
      next(err);
    }
  }
  else {
    console.log("Session found!");
    console.log(req.session);
    if (req.session.user) {
      console.log(req.session.user)
      next();
    }
  }
}

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/dishes', dishRouter);
app.use('/leaders', leaderRouter);
app.use('/promotions', promoRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  if (err.status == 401) {
    res.writeHead(err.status || 500, {
      'WWW-authenticate': 'Basic',
      'Content-Type': 'text/plain'
    })
    res.end(err.message);
  }
  else {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');

  }

});

module.exports = app;
