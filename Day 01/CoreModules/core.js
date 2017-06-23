var path = require('path');
var _ = require('underscore');

console.log(path.normalize(path.join(__dirname, '/foo/bar//bas//es/..')));

var util = require('util');

util.log('sample Message');
var name = "raph";
var money = 33;

console.log(util.format('%s has %d dollars', name, money));
console.log(util.isArray([]));
console.log(util.isArray({length: 0}));

console.log(util.isDate(new Date()));
console.log(util.isDate({}));

console.log(util.isError(new Error('Damn Error')));
console.log(util.isError({message: 'new messsage'}));

var os = require('os');
var gigaByte = 1 / (Math.pow(1024,3));
console.log('Total Memory', os.totalmem() * gigaByte, 'GBs');
console.log('Free Memory', os.freemem() * gigaByte, 'GBs');
console.log('Percent Consumed', 100 * (1 - os.freemem()/os.totalmem()));

console.log(_.min([3,1,2,10,-1]));