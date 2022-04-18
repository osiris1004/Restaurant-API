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
    let restaurant = await Restaurant.findByIdAndDelete(req.params.id)  
    .then(()=>{
        res.send({"server" : "you successfully deleted"})
       
    .catch((err)=>console.log(err))

    })

}