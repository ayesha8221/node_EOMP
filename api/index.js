// Importing modules and instantiating express app
const path = require("path");
const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
// Importing routes
const router = require("./routes/routes")
// Setting port based on environment variables
require("dotenv").config();
const PORT = process.env.PORT || 3000;
// App settings & middleware
app.set("PORT", process.env.PORT || 3000);
app.use(express.json(), cors());
// Allowing frontend access to backend
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Root Route
// app.get("/", (req, res) => {
//   res.status(200);
//   res.sendFile(path.join(__dirname, "./static/html/index.html"));
// });
// Use router to handle product and user routes
// app.use("/users", router.userRoutes);
// app.use('/products', router.productRoutes);
app.use(router);
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
