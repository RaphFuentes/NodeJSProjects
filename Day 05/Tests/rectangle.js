module.exports= function(x,y,callback){
    console.log("This is a console in rectangle")
    console.time();
    console.time();
    console.time();
    console.time();
    try{
        if(x < 0 || y < 0){
            throw new Error("Length and width cannot be negative");
        }
        else
            callback(null, {
                perimeter: function(){
                    return (2*(x+y));
                },
                area: function(){
                    return (x*y);
                }
            });
    }
    catch(error){
        callback(error, null);
    }
}