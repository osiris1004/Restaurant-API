const adminManagingSchema = new Schema({
    products: [
      {
        name: {type: String,required: true,unique: true},
        price: {type: String,required: true,unique: true}
      }
    ],
  // potato 2e, fries 4e, cheese 2e, beef 2e
  menu: [
    {
      name: {type: String,required: true,unique: true},
      price: {type: String,required: true,unique: true}
    }
  ],
  promo: [
    {
      name: {type: String,required: true,unique: true},
      price: {type: String,required: true,unique: true}
    }
  ],  
  products: [
    {
      name: {type: String,required: true,unique: true},
      price: {type: String,required: true,unique: true}
    }
  ]
  });
  
  module.exports = mongoose.model("AdminManaging", adminManagingSchema);


  