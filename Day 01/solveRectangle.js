var rect = require('./rectangle');
var rectArea = require('./rectarea');
var rectPerim = require('./rectperim');
var argv = require('yargs').argv;

if (argv.length == null || argv.width == null){
    throw Error("Error: Input --length and --width arguments")

}

function solveRect(l,b){
    console.log('Solving Rectangle...')
    rect(l,b,function(err, rectangle){
        if (err){
            console.log(err);
        }
        else{

        }       
    })
}

function solveRectArea(l,b){
    console.log('Solving Rectangle...')
    rectArea(l,b,function(err, rectangle){
        if (err){
            console.log(err);
        }
        else{
            console.log("Area is: ", rectangle.area())
        }       
    })
}

function solveRectPerim(l,b){
    console.log('Solving Rectangle...')
    rectPerim(l,b,function(err, rectangle){
        if (err){
            console.log(err);
        }
        else{
            console.log("Perimeter is: ", rectangle.perimeter())           
        }       
    })
}

solveRectArea(argv.length,argv.width);
solveRectPerim(argv.length,argv.width);