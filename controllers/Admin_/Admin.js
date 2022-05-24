const bcrypt = require("bcryptjs");

const Admin = require("../../models/Bigboss_/Admin");
//import Admin  from "../../models/Bigboss_/Admin";



exports.login_post = async (req, res) => {
  
  const { email , password } = req.body;
  
  //.findOne, return a row based on the passed property
  const user = await Admin.findOne({ email });

  if (!user) {
    return res.send({"server" : "Invalid Credentials"})
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.send({"server" : "Invalid Credentials"})
  }
  console.log(req.session.email+"\n\n")
  req.session.isAuth = true
  req.session.email = user.email
  req.session.path ='/admin'
  req.session.save()

  console.log("am normally done")
  //console.log( "done")
  res.redirect("/admin/dashboard");
 
};


exports.dashboard_get = (req, res) => {
  const email= req.session.email;
  console.log(email)
  return res.send({"server" : "Welcome "+email+" you were actually redirected to your dashboard"})
};


exports.logout_post = (req, res) => {
 
  
  if(req.session.email !=req.body.email){
    return res.send({"server" : "You can logout cuz you are not logout since your session was not identify"})
  }
  req.session.destroy((err) => {
    if (err) throw err;
    //res.redirect("/login");
    return res.send({"server" : "You logout"})

  
  });
};





