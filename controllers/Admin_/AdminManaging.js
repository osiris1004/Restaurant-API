const AdminManaging_Product = require("../../models/Admin_/AdminManaging-Product") 
const AdminManaging_Menu = require("../../models/Admin_/AdminManaging-Menu") 
const Order = require("../../models/Admin_/Order");

exports.products_get = async (req, res) => {
      AdminManaging_Product.find({})
      .then((result)=>{
          res.send(result)})
      .catch((err)=>console.log(err))
  };
  
  
  
  
  exports.add_products_post = async (req, res) => {

  const { name, price } = req.body;
  let product = await AdminManaging_Product.findOne({name});
  console.log(product)

  if (product) {
    return res.send({"server" : "this product exist"})
  }

  product = new AdminManaging_Product({
    
      name : name,
      price : price
    
  })

  await  product.save();
  res.send({"server" : "a new product  was added"})

  };
  
  
  
  exports.delete_products= async (req, res) => {

    AdminManaging_Product.findByIdAndDelete(req.params.id)  
    .then(()=>{
      res.send(" was deleted")
    })
       
    .catch((err)=>console.log(err))
  
  
  }


  /// menu 

  

exports.menu_get = async (req, res) => {
      AdminManaging_Menu.find({})
      .then((result)=>{
          res.send(result)})
      .catch((err)=>console.log(err))
  };
  
  
  exports.add_menu_post = async (req, res) => {

  const { name, price } = req.body;
  let product = await AdminManaging_Menu.findOne({name});
  console.log(product)

  if (product) {
    return res.send({"server" : "this product exist"})
  }

  product = new AdminManaging_Menu({
    
      name : name,
      price : price
    
  })

  await  product.save();
  res.send({"server" : "a new product  was added"})

  };
  
  
  
  exports.delete_menu= async (req, res) => {

    AdminManaging_Menu.findByIdAndDelete(req.params.id)  
    .then(()=>{
      res.send({"server" : "product successfully deleted"})
    })
       
    .catch((err)=>console.log(err))
  
  
  }



  //// 


  exports.order = async (req, res) =>{

    console.log("test you are in router") 
    const order = new Order(
      {
        name: req.body.nameID,
        quantity: req.body.quantity
        
      }
    ).save().then( result =>{
      res.send(result)
    }).catch( err =>{
      res.send(err)
    })
  }


  exports.orderList_get = async (req, res) => {
    Order.find({})
    .then((result)=>{
        res.send(result)})
    .catch((err)=>res.send(err))
};
