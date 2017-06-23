var http = require('http');

http.createServer(function(req, resp){
    console.log("Request starting");
    console.log(req.headers);
    if (req.headers['user-agent'].toString().indexOf("Chrome") > 1){
        resp.write("Hello Chrome User")
    }
    else{
        resp.write("Hello Client")
    }
    resp.end();
}).listen(3000);

console.log("Server listening at port 3000");