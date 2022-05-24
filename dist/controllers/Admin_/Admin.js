"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = require("bcryptjs");
//const Admin = require("../../models/Bigboss_/Admin");
const Admin_1 = __importDefault(require("../../models/Bigboss_/Admin"));
exports.login_post = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    //.findOne, return a row based on the passed property
    const user = yield Admin_1.default.findOne({ email });
    if (!user) {
        return res.send({ "server": "Invalid Credentials" });
    }
    const isMatch = yield bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.send({ "server": "Invalid Credentials" });
    }
    /* req.session.isAuth  = true
    req.session.email = user.email
    req.session.path ='/admin'
    req.session.save() */
    req.session.email = user.email;
    req.session.path = '/admin';
    req.session.save((err) => err);
    console.log("am normally done");
    //console.log( "done")
    res.redirect("/admin/dashboard");
});
exports.dashboard_get = (req, res) => {
    const email = req.session.email;
    console.log(email);
    return res.send({ "server": "Welcome " + email + " you were actually redirected to your dashboard" });
};
exports.logout_post = (req, res) => {
    if (req.session.email != req.body.email) {
        return res.send({ "server": "You can logout cuz you are not logout since your session was not identify" });
    }
    req.session.destroy((err) => {
        if (err)
            throw err;
        //res.redirect("/login");
        return res.send({ "server": "You logout" });
    });
};
