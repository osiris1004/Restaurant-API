## Authentication 
it is the process of proving or showing something to be true or valid 
in this case we are checking if uer exist and if their credential are valid

when implementing authentication in an application, there are 2 main ways of handle it 
    - By make use of cookies and session
    - By make use of a sign encrypted 

when an client request is executed and send, the server  receive it, process and send a response to the client.
when such is done, the client and server forget each other and this were session and cookies become handing 


when a client make a request to a server, the server automatically create a session  and then tore the session in the data base
when the server response to the client, it send a cookie, and this cooke is saved in the browser.
this cookie  reference or point to the session store in the data base. this cookie will then be send for every consecutive request to the server so that the server will know who the client or browser is

install session in node js
`<npm install express-session>`

************     
** client         [cookie]
***********         |
  ^     ^           ^   +
  |     |           +   +
  |     |           +   +
  |     |           +   +
  |     |           +   +
  |     |           +   +
  |     |           +   +
  v     v           +   ++++> session----------> store in data base
**********          +
** server ** +++++++++>|--------------
**********             | database
                       |----------------




## type script for express

### create package.json 
` npm init -y`

### install type script  dependency for express 
 ` npm i -D typescript @types/express @types/node ` 
 ` npm i -D typescript ts-node nodemon`     
 ` npm i express`

### generate tsconfig.json file and modify it 
 1-  `npx tsc --init`
 2- uncomment  //"outDir": "./"
 3- modify "outDir": "./" === "outDir": "./dist" 
 4- un comment  //"moduleResolution": "node",

### modify your scripts in package.json 
``` 
    "build": "npx tsc",
    "start": "node ./dist/app.js",
    "dev": "nodemon app.ts" 
```

### run your code 
`npx tsc`
`npm run dev `


## set up only type script 



npm i -D typescript ts-node nodemon

npm i express

npx tsc --init
