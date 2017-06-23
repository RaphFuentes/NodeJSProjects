var express = require ('express');
var appRouter = express.Router();

   appRouter.route('/')
        .all(function(req, res, next){
        res.writeHead(200, {
          'content-type' : 'plain/text'
        });
        next();
    }).get(function(req,res,next){
     res.end('Get leader Request');
    }).post(function(req,res,next){
     res.end('Post leader Request',next);
    }).delete(function(req,res){
     res.end('Delete leader Request');
    }).put(function(req,res,next){
        res.end('Put leader Request');
    });

module.exports = appRouter;