const AdminManaging = require("../../models/Admin_/AdminManaging");

exports.products_get = async (req, res) => {
      const menu = new AdminManaging({
        products:{
          name : req.body.title,
          price : req.body.snipper
        }
      })

    menu.save()  
        .then((result)=>{
            res.send(result)})
        .catch((err)=>console.log(err))
  };
  
  
  
  
  exports.add_products_post = async (req, res) => {

  //   const menu = new AdminManaging({
  //     products:{
  //       name : req.body.name,
  //       price : req.body.price
  //     }
  //   })

  // menu.save()  
  //     .then((result)=>{
  //         res.send(result)})
  //     .catch((err)=>console.log(err))


  const { name, price } = req.body;
  
  
  let product = await AdminManaging.find({"products" : { "name": name }});

  console.log(product)

  if (product) {
    return res.send({"server" : "this product exist"})
  }

  product = new AdminManaging({
    products:{
      name : name,
      price : price
    }
  })


  await  product.save();
  res.send({"server" : "a new product  was added"})

  };
  
  
  
  exports.delete_products_post = async (req, res) => {
    const id = req.params.id;
  
    Admin.findByIdAndDelete(id, function (err, docs) {
        if (err){
            console.log(err)
        }
        else{
            res.send(docs +" was deleted")
        }
    });
  
  }