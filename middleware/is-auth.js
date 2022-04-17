
// middle ware

module.exports = (req, res, next) => {
  if (req.session.isAuth) {
    next();
  } else {
    res.send({"server" : "You have to Login first"})
    //req.session.error = "You have to Login first";
    //res.redirect("/login");
  }
};




