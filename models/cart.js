var mongoose = require("mongoose");

var cartSchema = mongoose.Schema({
    items:
    [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Item"
      }
    ],
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Cart", cartSchema);
