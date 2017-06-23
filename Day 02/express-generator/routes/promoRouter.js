var express = require ('express');
var appRouter = express.Router();

   appRouter.route('/')
        .all(function(req, res, next){
        res.writeHead(200, {
          'content-type' : 'plain/text'
        });
        next();
    }).get(function(req,res,next){
     res.end('Get dishes Request');
    }).post(function(req,res,next){
     res.end('Post dishes Request',next);
    }).delete(function(req,res){
     res.end('Delete dishes Request');
    }).put(function(req,res,next){
        res.end('Put dishes Request');
    });

module.exports = appRouter;