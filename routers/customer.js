const express = require('express')


//------------------Controller---BigBoss---------------
const adminCtrl = require("../controllers/Admin_/AdminManaging");

//----- init route
const customerOrderRoute =  express.Router();


//--- set Routes

customerOrderRoute.post("/order", adminCtrl.order);

customerOrderRoute.get("/orderlist", adminCtrl.orderList_get);

customerOrderRoute.delete("/delete_order", adminCtrl.delete_order);

module.exports = customerOrderRoute