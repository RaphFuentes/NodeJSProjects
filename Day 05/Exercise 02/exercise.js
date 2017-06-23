var mongoose=require('mongoose');

mongoose.Promise = require('bluebird');

var Dishes = require('./dishes');
var Leaders = require('./leaders');
var Promotions = require('./promotions') ;

var url="mongodb://127.0.0.1:27017/conFusion";
mongoose.connect(url);

var db=mongoose.connection;

db.on('error',function(){
    console.log("error");
});

db.once('open', function(){
    console.log("Connected successfully");
   
    Dishes.create( {
      "name": "Uthapizza",
      "image": "images/uthapizza.png",
      "category": "mains",
      "label": "Hot",
      "price": "4.99",
      "description": "A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.",
      "comments": [
        {
          "rating": 5,
          "comment": "Imagine all the eatables, living in conFusion!",
          "author": "John Lemon"
        },
        {
          "rating": 4,
          "comment": "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
          "author": "Paul McVites"
        },
        {
          "rating": 3,
          "comment": "Eat it, just eat it!",
          "author": "Michael Jaikishan"
        },
        {
          "rating": 4,
          "comment": "Ultimate, Reaching for the stars!",
          "author": "Ringo Starry"
        },
        {
          "rating": 2,
          "comment": "It's your birthday, we're gonna party!",
          "author": "25 Cent"
        }
      ]
    },function(err,dish){
       console.log("Dishes Created");
       db.collection('dishes').drop(function(){
                   // db.close();
        });
    });

   Leaders.create({"name": "Peter Pan",
      "image": "images/alberto.png",
      "designation": "Chief Epicurious Officer",
      "abbr": "CEO",
      "description": "Our CEO, Peter, . . ."
},function(err,leader){
        console.log("Leaders Created");
         db.collection('leaders').drop(function(){
                  //  db.close();
        });
        }
    );

    Promotions.create({
      "name": "Weekend Grand Buffet",
      "image": "images/buffet.png",
      "label": "New",
      "price": "19.99",
      "description": "Featuring . . ."
    },function(err){
        console.log("Promotions created successfully");
         db.collection('promotions').drop(function(){
                  //  db.close();
        });
    }
        
    )

});  
