const bcrypt = require("bcryptjs");

const Preparator = require("../Bigboss_/Preparator");

exports.add_orderPicker_post = async (req, res) => {
    const {email, password} = req.body;

    let user = await Preparator.findOne({ email });

    if (user) {
        return res.send({"server" : "Order Picker already exists"})
    }

    const hashedPsw = await bcrypt.hash(password, 12);

    user = new Preparator ({
        email: email,
        password: hashedPsw
    });

    await user.save();
    res.send({"server" : "New admin has been created"})
};

exports.delete_orderPicker_post = async (req, res) => {
    const id = req.param.id;

    Preparator.findByIdAndDelete(id, function (err, docs){
        if (err){
            console.log(err)
        }
        else{
            res.send(docs +" has been deleted")
        }
    });
}