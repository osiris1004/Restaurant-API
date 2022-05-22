const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const adminManagingOrdersSchema = new Schema({
    name: {type: String, required: true, unique: true},
    orders: {type: String, required: true}
});

module.exports = mongoose.model("AdminManagingOrders", adminManagingOrdersSchema);
