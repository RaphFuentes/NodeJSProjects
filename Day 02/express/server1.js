var express= require('express');
var morgan= require('morgan');


var app = express();

app.set('port', 3000);

app.use(morgan('dev'));

app.use(express.static(__dirname+'/public')).listen(app.get('port'), function(){
    console.log("Server listening at", app.get('port'));
});
