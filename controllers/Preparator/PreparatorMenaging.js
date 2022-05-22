// const AdminManaging_order = require("../../models/Admin_/AdminManaging-Order")
const AdminManaging_Order = require("../../models/Admin_/AdminManaging-Order")

exports.orders_get = async (req, res) => {
    AdminManaging_Order.find({})
        .then((result)=>{
            res.send(result)})
        .catch((err)=>console.log(err))
};

// exports.add_orders_post = async (req, res) => {
//
//     const { name, price } = req.body;
//     let order = await AdminManaging_order.findOne({name});
//     console.log(order)
//
//     if (order) {
//         return res.send({"server" : "this order exist"})
//     }
//
//     order = new AdminManaging_order({
//
//         name : name,
//         price : price
//
//     })
//
//     await  order.save();
//     res.send({"server" : "hes been added successfully"})
//
// };
//
// exports.delete_orders= async (req, res) => {
//
//     AdminManaging_order.findByIdAndDelete(req.params.id)
//         .then(()=>{
//             res.send("has been deleted")
//         })
//
//         .catch((err)=>console.log(err))
// }
/// Order

exports.order_get = async (req, res) => {
    AdminManaging_Order.find({})
        .then((result)=>{
            res.send(result)})
        .catch((err)=>console.log(err))
};

exports.add_Order_post = async (req, res) => {

    const { name, price } = req.body;
    let order = await AdminManaging_Order.findOne({name});
    order = new Promise((accept) => {
        setTimeout(() => {
            accept();
        }, 1500);
    })
    await order;
    console.log("Preparation en cours : " + order)

    if (order) {
        return res.send({"server" : "this order exists"})
    }

    order = new AdminManaging_Order({
        name : name,
        price : price
    })

    await  order.save();
    res.send({"server" : "Your order " + name + "is ready to pickup"})

};

exports.delete_Order= async (req, res) => {

    AdminManaging_Order.findByIdAndDelete(req.params.id)
        .then(()=>{
            res.send({"server" : "order successfully deleted"})
        })

        .catch((err)=>console.log(err))
}
////