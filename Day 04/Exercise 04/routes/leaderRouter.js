var express = require('express');
var app = express();
var router = express.Router();

router.get('/',function(req,res){
    res.send("Get the leaders")
});
router.post('/',function(req,res){
    res.send("Post a leader");
});
router.delete('/',function(req,res){
    res.send("delete a leader");
});

module.exports = router;

