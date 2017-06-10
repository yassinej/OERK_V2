var express = require("express"),
    app = express(),
    ejs = require("ejs"),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override"),
    flash       = require("connect-flash"),
    passport    = require("passport"),
    LocalStrategy = require("passport-local"),
    mongoose    = require("mongoose"),
    Item        = require("./models/item"),
    Comment        = require("./models/comment"),
    User        = require("./models/user"),
    seedDB      = require("./seed");

/*console.log("var");*/
//connecting Database
var url = process.env.DATABASEURL || "mongodb://localhost/oerk";
mongoose.connect(url);
/*console.log("DB");*/
// seedDB();
// console.log("DB Seeded");
//requiring routes
var indexRoutes = require("./routes/index");
var itemRoutes = require("./routes/items");
var commentRoutes = require("./routes/comments");
/*console.log("routes");*/

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.use(flash());
/*console.log("app");*/
// PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "Once again Rusty wins cutest dog!",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Defining global var
app.use(function(req, res, next){
   res.locals.currentUser = req.user;
   res.locals.error = req.flash("error");
   res.locals.success = req.flash("success");
   next();
});

/*console.log("passport");*/
seedDB(); //seed the database
/*console.log("seed");*/

app.use("/", indexRoutes);
/*console.log("indexroute");*/
app.use("/items", itemRoutes);
/*console.log("itemroute");*/
app.use("/items/:id/comments", commentRoutes);
/*console.log("routes2");*/

//process.env.PORT, process.env.IP instead of 3000 for c9
var port_number = app.listen(process.env.PORT || 3000);
app.listen(port_number, function () {
    console.log("OERK is running!");
});
