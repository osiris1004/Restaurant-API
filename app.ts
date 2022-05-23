//const express = require("express");
import express, { Express } from "express";

// it set the need cookie for the specified session 
const session = require("express-session");

const cookieParser = require('cookie-parser')

// npm i connect-mongodb-session
const MongoDBStore = require("connect-mongodb-session")(session);
const config = require("config");

//-

const connectDB = require("./config/db");
const bigBossRoute = require("./routers/BigBoss");
const adminRoute = require("./routers/Admin");
const mongoURI = config.get("mongoURI");
const port: String = config.get("PORT");

//const app = express();
const app: Express = express();
connectDB();
//app.listen(port, console.log(`App Running on http://localhost:${port}`));
app.listen(port, ()=>console.log(`App Running on http://localhost:${port}`));
// parser
//express.json() is a method inbuilt in express to recognize the incoming Request Object as a JSON Object
app.use(express.json());
app.use(cookieParser())


const store = new MongoDBStore({
  // this mean connect to database (uri) and creat a collection name (mySessions)
  uri: mongoURI,
  collection: "mySessions",     // collection name
});


// this will fire for every consecutive request t   o the server  
app.use(
  session({
    secret : "secret",     // the key that will sign to the cookies that is save to the browser
    resave : false,        // for every request to the server we want to create a session 
    saveUninitialized : false,   // if we did not modify the session, we dont want it to save 
    
    cookie : { maxAge : (5 * 86400000)}, // 1day = 86400000 expirer after 5
    store : store       // it connect to the mongoose data base to store session in database
  })
);


//====================Route */
app.use('/bigBoss',bigBossRoute)
app.use('/admin',adminRoute)









