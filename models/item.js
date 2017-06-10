var mongoose = require("mongoose");

var itemSchema = new mongoose.Schema({
   name: String,
   category: String,
   image: String,
   description: String,
   detailedDescription: String,
   additionalInfo: [{ info: String, content: String }],
   price: Number,
   comments: [
      {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Comment"
      }
   ]
});

module.exports = mongoose.model("Item", itemSchema);
