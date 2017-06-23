var fs = require('fs');

console.log("Writing file in Sync");
fs.writeFileSync('test.txt', "Hello fs!");
console.log("Done writing in Sync");

console.log("Reading in sync call")
var contents = fs.readFileSync("test.txt");
console.log("Done Reading in sync call");

console.log(contents.toString());

console.log("Deleting in sync call");
try{
    fs.unlinkSync('test.txt');
    console.log("Deleted in sync call successfully");
}
catch(err){
    console.log(err);
}

console.log("Writing file in Sync again");
fs.writeFileSync('test.txt', "Hello fs!");
console.log("Done writing in Sync again");


console.log("Reading in Asnyc call");
fs.readFile("test.txt", function(err,data){
    console.log("Inside Reading Asnyc call");
    if (err){
        console.log(err);
    }
    else {
        console.log(data.toString());
    }
});
console.log("After Asnyc call");

console.log("Deleting in Async call");
fs.unlink("test.txt", function(err){
    console.log("Inside delete async");
    if (err){
        console.log("Erro in deleting file in async call");
    }
    else{
        console.log("Successfully deleted in async");
    }
})
console.log("Deleted in asnync call succesfull");

