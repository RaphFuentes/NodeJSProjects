var http = require('http');
var fs = require('fs');

function send404(resp){
    resp.writeHead(404, {'content-type':'text/plain'});
    resp.write("Resource not available");
    resp.end();
}

http.createServer(function(req, resp){
    if(req.method == "GET"  && req.url == '/'){
        resp.writeHead(200, {'content-type':'text/html'});
        fs.createReadStream('./public/index.html').pipe(resp);
    }
    else{
        send404(resp);
    }
    resp.end();
}).listen(3000);

console.log("Server listening at port 3000");