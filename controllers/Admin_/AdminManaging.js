const Admin = require("../../models/Admin_/AdminManaging");

exports.add_product_post = async (req, res) => {
    const { restaurant_name } = req.body;
    
  
    let restaurant = await Restaurant.findOne({restaurant_name});
  
  
    if (restaurant) {
      return res.send({"server" : "this restaurant exist"})
    }
  
    restaurant = new Restaurant({
      restaurant_name : restaurant_name,
    });
  
    await  restaurant.save();
    res.send({"server" : "a new restaurant was added"})
  };
  
  
  
  
  exports.delete_restaurant_post = async (req, res) => {
    const id = req.params.id;
    
                      // return the found document if any
                      //                              |
                      //                              v
    Restaurant.findByIdAndDelete(id, function (err, docs) {
        if (err){
            console.log(err)
        }
        else{
            res.send(docs +" was deleted")
        }
    });
  
  }