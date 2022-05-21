const express = require('express')


//------------------Controller---Admin---------------
const AdminCtrl = require("../controllers/Admin_/Admin");
const AdminManagingCtrl = require("../controllers/Admin_/AdminManaging");

const adminRoute =  express.Router();

// auth middleware
const isAuth = require("../middleware/is-auth");

// Login 
//app.get("/login", appController.login_get);
adminRoute.post("/login", AdminCtrl.login_post);

// Register 
//app.get("/register", appController.register_get);
/* app.post("/admin/register", BigBossCtrl.register_post); */

// Dashboard 
adminRoute.get("/dashboard", isAuth, AdminCtrl.dashboard_get);


// logout 
adminRoute.post("/logout", AdminCtrl.logout_post);


// Admin managing process
adminRoute.get("/product", AdminManagingCtrl.products_get);

adminRoute.post("/add_product", AdminManagingCtrl.add_products_post);

adminRoute.delete("/product/:id", AdminManagingCtrl.delete_products);


adminRoute.get("/menu", AdminManagingCtrl.menu_get);

adminRoute.post("/add_menu", AdminManagingCtrl.add_menu_post);

adminRoute.delete("/menu/:id", AdminManagingCtrl.delete_menu);



module.exports = adminRoute

