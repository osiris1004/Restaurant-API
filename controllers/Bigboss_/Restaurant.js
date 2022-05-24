const bcrypt = require("bcryptjs");
const Restaurant = require("../../models/Bigboss_/Restaurant");
const Order = require("../../models/Admin_/Order");


exports.add_restaurant_post = async (req, res) => {
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

exports.get_restaurant_post = async (req, res) => {
    Restaurant.find({})
        .then((result)=>{
            res.send(result)})
        .catch((err)=>console.log(err))
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