var express = require ('express');
var bodyParser = require('body-parser');


var app = express();
app.set('port', 3000);

app.use(bodyParser.json())
    .use(function(req,res){
        if(req.body.foo){
            res.end("Body parsed! Value of foo: " + req.body.foo);
        }
        else{
            res.end("Body does not have foo")
        }
    }).listen(app.get('port'));