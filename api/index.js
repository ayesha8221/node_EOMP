// Importing modules and instantiating express app
const path = require("path");
const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const router = require("./routes/routes");
const errorHandling = require("./middleware/ErrorHandling");
// const {errorHandling} = require('./middleware/ErrorHandling')
// import errorHandling from "./middleware/ErrorHandling";

const cookieParser = require("cookie-parser")

// Setting port based on environment variables
require("dotenv").config();
const PORT = process.env.PORT || 3000;


app.use(express.json(), cors(), cookieParser());


// Allowing frontend access to backend
app.use((req, res, next)=>{
  res.header("Access-Control-Allow-Origin", "");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Request-Methods", "*");
  res.header("Access-Control-Expose-Headers", "*");
  next()
})


app.use(express.json());


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

// Root Route
app.use(router);

app.use(express.static('public'));
app.get("/", (req, res) => {
  res.status(200);
  res.sendFile(path.join(__dirname, "./static/html/index.html"));
});


app.use(errorHandling)
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});










// import express
// import express from "express";
// import cors
// import cors from "cors";

// const path = require("path");
// const express = require("express");
// const cors = require("cors");
// const app = express();
// const bodyParser = require("body-parser");
// const router = express.Router();
// // import routes

// // import bodyParser from "body-parser";
   
// // init express
// // const app = express();
// const port = +process.env.PORT || 3000
// // use express json
// app.use(express.json());
  
// // use cors
// app.use(cors());

// app.use(bodyParser.json()); 
// app.use(express.urlencoded({ extended: true }));
  
// // use router
// app.use(router);
// // app.get('/', (req, res)=>{
// //     res.writeHead(200, {'Content-Type': 'text/html'});
// // })
// app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
