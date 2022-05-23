const express = require('express')


//------------------Controller---BigBoss---------------
const adminCtrl = require("../controllers/Admin_/AdminManaging");

//----- init route
const customerOrderRoute =  express.Router();


//--- set Routes

customerOrderRoute.post("/order", adminCtrl.order);

customerOrderRoute.get("/orderlist", adminCtrl.order);

module.exports = customerOrderRoute