const bcrypt = require("bcryptjs");
const { couldStartTrivia } = require("typescript");

const Admin = require("../../models/Bigboss_/Admin");
const mongoose = require("mongoose");

exports.add_admin_post = async (req, res) => {
  const {email, password,restaurant } = req.body;

  let user = await Admin.findOne({ email });

  if (user) {
    return res.send({"server" : "Admin already exists"})
  }

  const hasdPsw = await bcrypt.hash(password, 12);

  user = new Admin({
    email : email,
    password: hasdPsw,
    restaurant: restaurant
  });

  await user.save();
  res.send({"server" : "A new admin was created"})
};



exports.delete_admin_post = async (req, res) => {
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

