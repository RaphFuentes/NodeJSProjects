var fs = require('fs');
var zip = require('node-zip').
var gzip = require('zlib').

var inp = fs.createReadStream('./cool.txt');
var out = zip.createWriteStream('./cool.txt.zip');

inp.pipe(zip).pipe(out);
