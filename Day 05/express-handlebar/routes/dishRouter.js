var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var router = express.Router();

var Dishes = require('../model/dishes');
var Verify = require('./verify');
router.use(bodyParser.json());

router.route('/').get(Verify.verifyOrdinaryUser, function (req, res) {
    Dishes.find({}, function (err, dish) {
        res.json(dish);
        // res.render('dishes',{dishes: dish })

    });
});
router.route('/').post(Verify.verifyOrdinaryUser, function (req, res) {
    console.log(req.decoded._doc.admin);
    if (req.decoded._doc.admin) {
        Dishes.create(req.body, function (err, dish) {
            var id = dish._id;
            res.send("Added the dish with id" + id);
        });
    }
    else{
        res.send("RESTRICTED. Only admin accounts can add")
    }
});
router.delete('/:id', function (req, res) {
    Dishes.findByIdAndRemove(req.params["id"], function (err, dish) {
        res.send("Deleted the dish " + dish.name);
    })
});

router.put('/', function (req, res) {
    Dishes.findByIdAndUpdate(req.body._id, {
        $set: req.body
    }, { new: true }, function (err, dish) {
        res.json(dish);
    })
});

module.exports = router;

