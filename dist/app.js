"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//const express = require("express");
const express_1 = __importDefault(require("express"));
// it set the need cookie for the specified session 
const session = require("express-session");
var cookieParser = require('cookie-parser');
// npm i connect-mongodb-session
const MongoDBStore = require("connect-mongodb-session")(session);
const config = require("config");
//-
const connectDB = require("./config/db");
const bigBossRoute = require("./routers/BigBoss");
const adminRoute = require("./routers/Admin");
const customerRoute = require("./routers/customer");
const mongoURI = config.get("mongoURI");
const port = config.get("PORT");
//const app = express();
const app = (0, express_1.default)();
connectDB();
//app.listen(port, console.log(`App Running on http://localhost:${port}`));
app.listen(port, () => console.log(`App Running on http://localhost:${port}`));
// parser
//express.json() is a method inbuilt in express to recognize the incoming Request Object as a JSON Object
app.use(express_1.default.json());
app.use(cookieParser());
const store = new MongoDBStore({
    // this mean connect to database (uri) and creat a collection name (mySessions)
    uri: mongoURI,
    collection: "mySessions", // collection name
});
// this will fire for every consecutive request t   o the server  
app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: (5 * 86400000) },
    store: store // it connect to the mongoose data base to store session in database
}));
//====================Route */
app.use('/bigBoss', bigBossRoute);
app.use('/admin', adminRoute);
app.use('/customer', customerRoute);
