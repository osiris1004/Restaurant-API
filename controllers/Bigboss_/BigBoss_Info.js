const bcrypt = require("bcryptjs");

const BigBoss = require("../../models/Bigboss_/BigBoss");

exports.landing_page = async (req,res) =>{
  return res.send({"server" : "Landing page"})
}

exports.login_post = async (req, res) => {
  
  const { email, password } = req.body;
  //.findOne, return a row based on the passed property
  const user = await BigBoss.findOne({ email });

  if (!user) {
    return res.send({"server" : "Invalid Credentials"})
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.send({"server" : "Invalid Credentials"})
  }
  //req.session: use To store or access session data

  // create a session
  //set the created session a given name for tracing 
  req.session.isAuth = true;
  req.session.username = user.username;
  req.session.email = user.email;
  req.session.path ='/bigboss'

  return res.send({"server" : "you log in"})
 
};


exports.register_post = async (req, res) => {
  const { username, email, password } = req.body;

  let user = await BigBoss.findOne({ email });

  if (user) {
    //console.log(req.session)
    //req.session.error = "User already exists";
    //return res.redirect("/register");
    return res.send({"server" : "User already exists"})
  }

  const hasdPsw = await bcrypt.hash(password, 12);

  user = new BigBoss({
    username : username,
    email : email,
    password: hasdPsw,
  });

  await user.save();
  res.send({"server" : "your info are successfully save. you can sign in"})
};

exports.dashboard_get = (req, res) => {
  const username = req.session.username;
  
  return res.send({"server" : "Welcome " + username})
};



exports.logout_post = (req, res) => {
 
  if(!req.session.isAuth){
    return res.send({"server" : "You can logout cuz you are not logout since your session was not identify"})
  }
  req.session.destroy((err) => {
    if (err) throw err;
    //res.redirect("/login");
    return res.send({"server" : "You logout"})

  
  });
};


