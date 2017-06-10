var express = require("express");
var router  = express.Router();
var passport = require("passport");
var User = require("../models/user");
var middleware = require("../middleware");

router.get("", function (req, res) {
    res.render("landing");
});

router.get("/register", function (req, res) {
    res.render("register");
});

//handle sign up logic
router.post("/register", function(req, res){
    var newUser = new User({username: req.body.username, email: req.body.email});
    console.log("new user created : "+ newUser);

    User.register(newUser, req.body.password, function(err, user){
        if(err){
            console.log("error creating ");
            req.flash("error", err.message);
            return res.render("register");
        }
        passport.authenticate("local")(req, res, function(){
            console.log("authentication OK..");
           req.flash("success", "Welcome to OERK " + user.username);
           res.redirect("/items");
           console.log("redirecting to item list OK..");
        });
    });
});

//show login form
router.get("/login", function(req, res){
   res.render("login");
});

//handling login logic
router.post("/login", passport.authenticate("local",
    {
        successRedirect: "/items",
        failureRedirect: "/login",
        failureFlash: "Wrong Username or Password!",
        successFlash: "Welcome to OERK!"
    }), function(req, res){
});

// logout route
router.get("/logout", function(req, res){
   req.logout();
   console.log("Logout OK..");
   req.flash("success", "Logged you out!");
   res.redirect("/items");
   console.log("redirecting to item list OK..");
});

// admin route
router.get("/admin", middleware.checkAdmin,function(req, res){
   console.log("Admin accees OK..");
   req.flash("success", "You are an admin!");
   res.render("admin");

});
module.exports = router;
