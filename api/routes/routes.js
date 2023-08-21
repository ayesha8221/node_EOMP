// import express
const express = require("express");
const router = express.Router();
// import functions from controller
const {
  showProducts,
  showProductById,
  createProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/products");

//get all products
router.get("/Products", showProducts);

//get single product
router.get("/Products/:id", showProductById);

//create a new product
router.post("/Products", createProduct);

// Delete a product
router.delete("/Products/:id", deleteProduct);

// Update a product
router.put("/Products/:id", updateProduct);

// USER ROUTES

const {
  showUsers,
  showUserById,
  createUser,
  deleteUser,
  updateUser,
} = require("../controllers/users");

//get all users
router.get("/Users", showUsers);

//get single user
router.get("/Users/:id", showUserById);

//create a new user
router.post("/Users", createUser);

// Delete a user
router.delete("/Users/:id", deleteUser);

// Update a user
router.put("/Users/:id", updateUser);

// export default router
module.exports = router;