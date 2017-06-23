var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();

emitter.emit('foo', {a:123}, {b:4});

var eventHandler = function(arg1, arg2){
    console.log("Event triggered");
    console.log(arg1, arg2);
    emitter.removeListener("foo2", eventHandler);
};

emitter.on('foo', function(arg1, arg2){
    console.log("First Event triggered");
    console.log(arg1, arg2);
});

emitter.on('foo2', function(arg1, arg2){
    console.log("Second Event triggered");
    console.log(arg1, arg2);
});

emitter.on('foo2', eventHandler);

emitter.once('fooOnce', function(arg1, arg2){
    console.log("Event triggered only once");
    console.log(arg1, arg2);
});

emitter.emit('foo', 1, 2);
emitter.emit('foo2', 1, 2);
emitter.emit('foo2', 1, 2);
emitter.emit('foo2', 1, 2);
emitter.emit('foo2', "Not Reachable");

emitter.emit('fooOnce', 1, 2);
emitter.emit('fooOnce', 1, 2);

emitter.emit('fooOnce1', 1, 2);