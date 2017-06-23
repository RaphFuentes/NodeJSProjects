var foo = require('./foo2');
console.log('initial something:', foo.something);

foo.something=456;
var bar = require('./bar2');

var newFoo = require('./foo3');
var newFooObject = newFoo();
console.log(newFooObject.something, newFooObject.text);
