var fs = require('fs');
var gzip = require('zlib').createGunzip();

var inp = fs.createReadStream('./cool.txt');
var out = fs.createWriteStream('./cool.txt.gz');

inp.pipe(gzip).pipe(out);


