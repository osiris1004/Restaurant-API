const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  restaurant_name: {
    type: String,
    required: true,
    unique: true,
  },
 
});

module.exports = mongoose.model("Restaurant", userSchema);



