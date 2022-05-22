const express = require('express')

//------------------Controller---Preparator---------------

const PreparatorCtlr = require("../controllers/Preparator/Preparator");
const AdminManagingCtrl = require("../controllers/Admin_/AdminManaging");

const PreparatorRoute = express.Router()

// auth middleware

const isAuth = require("../middleware/is-auth");

// Login
PreparatorRoute.post("/login", PreparatorCtlr.login_post);

// Register

// DashBoard
PreparatorRoute.get("/dashboard", isAuth, PreparatorCtlr.dashboard_get);

// logout
PreparatorRoute.post("/logout", PreparatorCtlr.logout_post)

// Preparatory Mapping process

PreparatorRoute.get("/order", PreparatorCtlr.order_get);

PreparatorRoute.post("/add_order", PreparatorCtlr.add_order_post);