module.exports= function(x,y,callback){
    try{
        if(x < 0 || y < 0){
            throw new Error("Length and width cannot be negative");
        }
        else
            callback(null, {
                perimeter: function(){
                    return (2*(x+y));
                }
            });
    }
    catch(error){
        callback(error, null);
    }
}