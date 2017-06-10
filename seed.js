var mongoose = require("mongoose");
var Item = require("./models/item");
var Comment = require("./models/comment");


var data = [
    {
        name: "Adult sleeping bag",
        image: "https://cdn.pixabay.com/photo/2012/10/05/01/44/sleeping-bag-59653__340.jpg",
        price: "5",
        category: "Sleeping bags",
        detailedDescription: "Bacon ipsum dolor amet venison salami pig t-bone shoulder frankfurter, capicola corned beef swine sausage. Ham hock tri-tip meatloaf pork chop pork loin. Turkey pig short ribs bresaola chicken. Shankle shank kielbasa salami ball tip pork loin andouille ham hock jerky boudin. Meatloaf strip steak capicola, cupim short loin cow beef ribs ham hock. Pork beef ribs kielbasa, t-bone cow tri-tip spare ribs.",
        additionalInfo: [{info: "Dimensions", content: "200X60X5 mm"}, {info: "Weight", content: "1 Kg"}, {info: "Temp", content: "-20°C"},{info: "Brand", content: "Go Outdoors"}],
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    {
        name: "Kid sleeping bag",
        image: "https://cdn.pixabay.com/photo/2012/10/05/01/44/sleeping-bag-59653__340.jpg",
        price: "3",
        category: "Sleeping bags",
        detailedDescription: "Bacon ipsum dolor amet venison salami pig t-bone shoulder frankfurter, capicola corned beef swine sausage. Ham hock tri-tip meatloaf pork chop pork loin. Turkey pig short ribs bresaola chicken. Shankle shank kielbasa salami ball tip pork loin andouille ham hock jerky boudin. Meatloaf strip steak capicola, cupim short loin cow beef ribs ham hock. Pork beef ribs kielbasa, t-bone cow tri-tip spare ribs.",
        additionalInfo: [{info: "Dimensions", content: "150X40X5 mm"}, {info: "Weight", content: "0,8 Kg"}, {info: "Temp", content: "-20°C"},{info: "Brand", content: "Go Outdoors"}],
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    {
        name: "Family tent",
        image: "https://cdn.pixabay.com/photo/2015/07/16/19/37/tipi-848051__340.jpg",
        price: "10",
        category: "Tents",
        detailedDescription: "Bacon ipsum dolor amet venison salami pig t-bone shoulder frankfurter, capicola corned beef swine sausage. Ham hock tri-tip meatloaf pork chop pork loin. Turkey pig short ribs bresaola chicken. Shankle shank kielbasa salami ball tip pork loin andouille ham hock jerky boudin. Meatloaf strip steak capicola, cupim short loin cow beef ribs ham hock. Pork beef ribs kielbasa, t-bone cow tri-tip spare ribs.",
        additionalInfo: [{info: "Dimensions", content: "60X15X15 mm"}, {info: "Weight", content: "3 Kg"}, {info: "Temp", content: "0°C"},{info: "Brand", content: "Go Outdoors"}],
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    {
        name: "Camping cooking set",
        image: "https://cdn.pixabay.com/photo/2014/04/27/11/38/tea-pot-333072__340.jpg",
        price: "10",
        category: "Cooking",
        detailedDescription: "Bacon ipsum dolor amet venison salami pig t-bone shoulder frankfurter, capicola corned beef swine sausage. Ham hock tri-tip meatloaf pork chop pork loin. Turkey pig short ribs bresaola chicken. Shankle shank kielbasa salami ball tip pork loin andouille ham hock jerky boudin. Meatloaf strip steak capicola, cupim short loin cow beef ribs ham hock. Pork beef ribs kielbasa, t-bone cow tri-tip spare ribs.",
        additionalInfo: [{info: "Dimensions", content: "40X20X10 mm"}, {info: "Weight", content: "1 Kg"},{info: "Brand", content: "Go Outdoors"}],
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    {
        name: "Camping stove",
        image: "https://cdn.pixabay.com/photo/2015/10/12/15/01/camping-984094__340.jpg",
        price: "5",
        category: "Cooking",
        detailedDescription: "Bacon ipsum dolor amet venison salami pig t-bone shoulder frankfurter, capicola corned beef swine sausage. Ham hock tri-tip meatloaf pork chop pork loin. Turkey pig short ribs bresaola chicken. Shankle shank kielbasa salami ball tip pork loin andouille ham hock jerky boudin. Meatloaf strip steak capicola, cupim short loin cow beef ribs ham hock. Pork beef ribs kielbasa, t-bone cow tri-tip spare ribs.",
        additionalInfo: [{info: "Dimensions", content: "40X20X10 mm"}, {info: "Weight", content: "1 Kg"},{info: "Brand", content: "Go Outdoors"}],
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    {
        name: "Camping Family dishes",
        image: "https://cdn.pixabay.com/photo/2015/05/03/07/26/stew-750846__340.jpg",
        price: "5",
        category: "Cooking",
        detailedDescription: "Bacon ipsum dolor amet venison salami pig t-bone shoulder frankfurter, capicola corned beef swine sausage. Ham hock tri-tip meatloaf pork chop pork loin. Turkey pig short ribs bresaola chicken. Shankle shank kielbasa salami ball tip pork loin andouille ham hock jerky boudin. Meatloaf strip steak capicola, cupim short loin cow beef ribs ham hock. Pork beef ribs kielbasa, t-bone cow tri-tip spare ribs.",
        additionalInfo: [{info: "Dimensions", content: "40X20X10 mm"}, {info: "Weight", content: "1 Kg"},{info: "Brand", content: "Go Outdoors"}],
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    {
        name: "Adult hammock",
        image: "https://cdn.pixabay.com/photo/2015/11/07/11/39/hammock-1031363__340.jpg",
        price: "5",
        category: "Hammock",
        detailedDescription: "Bacon ipsum dolor amet venison salami pig t-bone shoulder frankfurter, capicola corned beef swine sausage. Ham hock tri-tip meatloaf pork chop pork loin. Turkey pig short ribs bresaola chicken. Shankle shank kielbasa salami ball tip pork loin andouille ham hock jerky boudin. Meatloaf strip steak capicola, cupim short loin cow beef ribs ham hock. Pork beef ribs kielbasa, t-bone cow tri-tip spare ribs.",
        additionalInfo: [{info: "Dimensions", content: "40X20X10 mm"}, {info: "Weight", content: "1 Kg"},{info: "Brand", content: "Go Outdoors"}],
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    {
        name: "Kid hammock",
        image: "https://cdn.pixabay.com/photo/2015/08/25/19/37/hammock-907447__340.jpg",
        price: "3",
        category: "Hammock",
        detailedDescription: "Bacon ipsum dolor amet venison salami pig t-bone shoulder frankfurter, capicola corned beef swine sausage. Ham hock tri-tip meatloaf pork chop pork loin. Turkey pig short ribs bresaola chicken. Shankle shank kielbasa salami ball tip pork loin andouille ham hock jerky boudin. Meatloaf strip steak capicola, cupim short loin cow beef ribs ham hock. Pork beef ribs kielbasa, t-bone cow tri-tip spare ribs.",
        additionalInfo: [{info: "Dimensions", content: "40X20X10 mm"}, {info: "Weight", content: "1 Kg"},{info: "Brand", content: "Go Outdoors"}],
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    {
        name: "Sausage/Marshmallow stick",
        image: "https://cdn.pixabay.com/photo/2015/11/07/11/26/campfire-1031141__340.jpg",
        price: "10",
        category: "Cooking",
        detailedDescription: "Bacon ipsum dolor amet venison salami pig t-bone shoulder frankfurter, capicola corned beef swine sausage. Ham hock tri-tip meatloaf pork chop pork loin. Turkey pig short ribs bresaola chicken. Shankle shank kielbasa salami ball tip pork loin andouille ham hock jerky boudin. Meatloaf strip steak capicola, cupim short loin cow beef ribs ham hock. Pork beef ribs kielbasa, t-bone cow tri-tip spare ribs.",
        additionalInfo: [{info: "Dimensions", content: "40X20X10 mm"}, {info: "Weight", content: "1 Kg"},{info: "Brand", content: "Go Outdoors"}],
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    }
]

function seedDB(){
   //Remove all items
   Item.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed items!");
         //add a few items
        data.forEach(function(seed){
            Item.create(seed, function(err, item){
                if(err){
                    console.log(err)
                } else {
                    console.log("added an item");
                    /*Comment.create(
                        {
                            text: "This place is great, but I wish there was internet",
                            author: "Homer"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            } else {
                                item.comments.push(comment);
                                item.save();
                                console.log("Created new comment");
                            }
                        });*/
                }
            });
        });
    });
}

module.exports = seedDB;
