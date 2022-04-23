const adminManagingSchema = new Schema({
    products: [{
      name: {type: String,required: true,unique: true}
    }],
  // big mac, mc fish, mc flurry, chicken mc nuggets
  
  
    menu: [{
      name: {type: String,required: true,unique: true}
    }],
    promotion: [{
  
      products: {type: String,required: true,unique: true}
    }],
    promotion: [{
      products: {type: String,required: true,unique: true}
    }],
  
    putForward: [{
  
      products: {type: String,required: true,unique: true}
    }],
   
  });
  
  module.exports = mongoose.model("AdminManaging", adminManagingSchema);
  