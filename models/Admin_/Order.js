const mongoose = require("mongoose");
const Schema = mongoose.Schema;


  const orderSchema = new Schema({
      
      // which product was order based on id
                                                // connect schema with my product
    name: {type: mongoose.Schema.Types.ObjectId, ref :'AdminManagingProduct'},
    quantity : {type: Number, default: 1}
});

module.exports = mongoose.model("Order", orderSchema);



  