var fs = require('fs');
var ws = fs.createWriteStream('message.txt');
ws.write('Node application text');
ws.end();