var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var router = express.Router();

var Dishes = require('./model/dishes');

router.use(bodyParser.json());

router.get('/',function(req,res){
    Dishes.find({},function(err,dishes){
        res.json(dishes);
    });
});
router.post('/',function(req,res){
    Dishes.create(req.body,function(err,dish){
        var id=dish._id;
        res.send("Added the dish with id"+ id);
    });
});
router.delete('/:id',function(req,res){
    Dishes.findByIdAndRemove(req.params["id"],function(err,dish){
        res.send("Deleted the dish "+dish.name);
    })
});

router.put('/',function(req,res){
    Dishes.findByIdAndUpdate(req.body._id,{
        $set: req.body
    }, {new: true},function(err, dish){
        res.json(dish);
    })
});

module.exports = router;

