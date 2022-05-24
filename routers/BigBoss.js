const express = require('express')


//------------------Controller---BigBoss---------------
const BigBossCtrl = require("../controllers/Bigboss_/BigBoss_Info");
const BigBossRestaurantCtrl = require("../controllers/Bigboss_/Restaurant");
const BigBossAdminCtrl = require("../controllers/Bigboss_/Admin");

const bigBossRoute =  express.Router();

// auth middleware
const isAuth = require("../middleware/is-auth");



// Login 
bigBossRoute.post("/login", BigBossCtrl.login_post);


// Register 
bigBossRoute.post("/register", BigBossCtrl.register_post);

// Dashboard 
bigBossRoute.get("/dashboard", isAuth, BigBossCtrl.dashboard_get);


//*************************************** */
// Dashboard/ add restaurant and delete restaurant
bigBossRoute.post("/dashboard/add_restaurant", isAuth, BigBossRestaurantCtrl.add_restaurant_post);
bigBossRoute.delete("/dashboard/delete_restaurant/:id", isAuth, BigBossRestaurantCtrl.delete_restaurant_post);

//*************************************** */
// Dashboard/ add Admin and delete Admin
bigBossRoute.post("/dashboard/add_admin", isAuth, BigBossAdminCtrl.add_admin_post);
bigBossRoute.delete("/dashboard/delete_admin/:id", isAuth, BigBossAdminCtrl.delete_admin_post);
//************************ */
// logout 
bigBossRoute.post("/logout", BigBossCtrl.logout_post);

module.exports = bigBossRoute