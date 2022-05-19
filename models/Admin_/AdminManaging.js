const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminManagingSchema = new Schema({
    products: [
      {
        name: {type: String,required: true},
        price: {type: String,required: true}
      }
    ],
  // potato 2e, fries 4e, cheese 2e, beef 2e
      menu: [
        {
          name: {type: String,required: true},
          price: {type: String,required: true}
        }
      ],
      promo: [
        {
          name: {type: String,required: true},
          price: {type: String,required: true}
        }
      ],  
      products: [
        {
          name: {type: String,required: true},
          price: {type: String,required: true}
        }
      ]
  });
  
  module.exports = mongoose.model("AdminManaging", adminManagingSchema);


  