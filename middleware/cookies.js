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