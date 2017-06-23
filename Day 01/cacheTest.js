var t1= new Date().getTime();
var foo = require('./foo');
foo();
console.log(new Date().getTime()-t1);

var t2= new Date().getTime();
var foo = require('./foo');
foo();
console.log(new Date().getTime()-t2);