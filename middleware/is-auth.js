
// middle ware

module.exports = (req, res, next) => {
  if (req.session.isAuth) {
    next();
  } else {
    return res.send({"server" : "You have to Login first"})
    //req.session.error = "You have to Login first";
    //res.redirect("/login");
  }
};




