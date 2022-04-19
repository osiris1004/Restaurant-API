const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
  restaurant_name: {
    type: String,
    required: true,
    unique: true,
  },
 
});

module.exports = mongoose.model("Restaurant", restaurantSchema);







