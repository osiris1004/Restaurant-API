const bcrypt = require("bcryptjs");

const BigBoss = require("../../models/Bigboss_/BigBoss");


exports.login_post = async (req, res) => {
  const { email, password } = req.body;
  
  //.findOne, return a row based on the passed property
  const user = await BigBoss.findOne({ email });
  if (!user) {
    return res.send({"Server" : "Invalid Credentials"})
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.send({"Server" : "Invalid Credentials"})
  }
  //req.session: use To store or access session data

  // create a session
  //set the created session a given name for tracing 
  req.session.isAuth = true;
  req.session.username = user.username;
  req.session.email = user.email;
  req.session.path ='/bigboss'
  req.session.save()

  return res.send({"Srever" : "welcome "+ req.session.username + " !! we are happy to see you"})
  
 
};


exports.register_post = async (req, res) => {
  const { username, email, password } = req.body;
  
  let user = await BigBoss.findOne({ email });

  if (user) {
    //console.log(req.session)
    //req.session.error = "User already exists";
    //return res.redirect("/register");
    return res.send({"Server" : "User already exist"})
  }

  const hasdPsw = await bcrypt.hash(password, 12);

  user = new BigBoss({
    username : username,
    email : email,
    password: hasdPsw,
  });

  await user.save().then( result => res.send([{"Server" : "your registration was successful. You can login to your account"},
  {"DB" : result}]))
  
};

exports.dashboard_get = (req, res) => {
  const username = req.session.username;
  return res.send({"Server" : "Welcome " + username +" you are in your dashboard"})
};



exports.logout_post = (req, res) => {

  if(req.session.email !=req.body.email){
    return res.send({"Server" : "You can logout cuz you are not login since your session was not identify"})
  }
  req.session.destroy((err) => {
    if (err) throw err;
    //res.redirect("/login");
    return res.send({"Server" : "You logout"})

  
  });
};


