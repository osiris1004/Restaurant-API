const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const adminManagingHighlightedSchema = new Schema({
  name: {type: String,required: true},
  price: {type: String,required: true}
});
// potato 2e, fries 4e, cheese 2e, beef 2e

module.exports = mongoose.model("AdminManagingHightLight", adminManagingHighlightedSchema);


  