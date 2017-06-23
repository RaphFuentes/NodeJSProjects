var express= require('express');

express().use(function(req, resp, next){
    resp.end("Hello Express")
}).listen(3000, function(){
    console.log("Server is listening at port 3000")
});

