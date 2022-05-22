const bcrypt = require("bcryptjs");
const Restaurant = require("../../models/Bigboss_/Restaurant");


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
          res.send(docs +" has been deleted")
      }
  });

}