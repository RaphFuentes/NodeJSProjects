module.exports= function(appRouter){
   appRouter.route('/leadership')
    .all(function(req, res, next){
        res.writeHead(200, {
            'content-type' : 'plain/text'
        });
        next();
    }).get(function(req,res,next){
    res.end('Get leadership Request');
    }).post(function(req,res,next){
    res.end('Post leadership Request',next);
    }).delete(function(req,res){
    res.end('Delete leadership Request');
    }).put(function(req,res,next){
    res.end('Put leadership Request');
    });

}