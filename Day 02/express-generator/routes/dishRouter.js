var express = require ('express');
var appRouter = express.Router();

   appRouter.route('/')
        .all(function(req, res, next){
        res.writeHead(200, {
          'content-type' : 'plain/text'
        });
        next();
    }).get(function(req,res,next){
     res.end('Get promo Request');
    }).post(function(req,res,next){
     res.end('Post promo Request',next);
    }).delete(function(req,res){
     res.end('Delete promo Request');
    }).put(function(req,res,next){
        res.end('Put promo Request');
    });

module.exports = appRouter;