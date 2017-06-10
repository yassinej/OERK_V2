var express = require("express");
var router  = express.Router();
var Item = require("../models/item.js");
var middleware = require("../middleware");

//handling accessing to all items
router.get("", function (req, res) {
    // Get all items from DB
    Item.find({}, function(err, allItems){
       if(err){
           console.log(err);
       } else {
          res.render("items/index",{items:allItems});
       }
    });
});
//handling adding an item
router.get("/new", middleware.checkAdmin, function(req, res){
  res.render("items/new");
});

router.post("", middleware.checkAdmin, function(req, res){
  console.log(req.body.item);
  Item.create(req.body.item, function(err, item){
     if(err){
         req.flash("error", "Something went wrong");
         console.log(err);
     } else {
         console.log(item);
         req.flash("success", "Successfully added comment");
         res.redirect('/items/' + item._id);
     }
  });
});

//handling acces to one item
router.get("/:id", function(req, res){
    //find the item with provided ID
    Item.findById(req.params.id).populate("comments").exec(function(err, foundItem){
        if(err){
            console.log(err);
        } else {
            console.log(foundItem);
            //render show template with that item
            res.render("items/show", {item: foundItem});
        }
    });
});


module.exports = router;
