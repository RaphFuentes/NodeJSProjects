var express = require('express');
var app = express();
var router = express.Router();

router.get('/',function(req,res){
    res.send("Get the Promotions")
});
router.post('/',function(req,res){
    res.send("Post a promotion");
});
router.delete('/',function(req,res){
    res.send("delete a promotion");
});

module.exports = router;

