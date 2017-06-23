module.exports= function(appRouter){
   appRouter.route('/promotions')
        .all(function(req, res, next){
         res.writeHead(200, {
            'content-type' : 'plain/text'
        });
         next();
    }).get(function(req,res,next){
        res.end('Get promotions Request');
    }).post(function(req,res,next){
        res.end('Post promotions Request ' + req.body.yvan);
    }).delete(function(req,res){
        res.end('Delete promotions Request');
    }).put(function(req,res,next){
        res.end('Put promotions Request');
    });
}