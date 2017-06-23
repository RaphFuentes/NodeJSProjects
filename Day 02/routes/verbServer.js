var express = require('express');
var bodyParser = require('body-parser');


var app = express();
app.set('port', 3000);

var appRouter = express.Router();

appRouter.route('/')
    .all(function(req, res, next){
    res.writeHead(200, {
        'content-type' : 'plain/text'
    });
    next();
}).get(function(req,res,next){
    res.end('Get Request');
}).post(function(req,res,next){
    res.end('Post Request',next);
}).delete(function(req,res){
    res.end('Delete Request');
}).put(function(req,res,next){
    res.end('Put Request');
});

appRouter.route('/yvan')
    .post(function(req,res,next){
        res.end('Post yvan Request: '+ req.body.yvan);
    }).get(function(req,res,next){
    res.end('Get yvan Requests');
});

appRouter.route('/:dynamic')
    .post(function(req,res,next){
        res.end('Post Dynamic Request: '+ req.body.yvan +" " + req.params.dynamic);
    }).get(function(req,res,next){
    res.end('Get Requests: '+ req.params.dynamic);
});


app.get('/lotty', function(req,res){
    res.end('Get Lotty Request');
});

app.use(bodyParser.json()).use('/', appRouter).listen(app.get('port'), function(){
    console.log("Server has started at port: ", app.get('port'));
});