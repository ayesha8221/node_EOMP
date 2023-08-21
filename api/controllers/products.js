// Import function from Product Model
const { getProducts, getProductById, insertProduct, deleteProductByID, updateProductByID} =require("../models/productModels.js")
  
// Get All Products
const showProducts = (req, res) => {
    getProducts((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  
// Get Single Product 
const showProductById = (req, res) => {
    getProductById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  
// Create New Product
const createProduct = (req, res) => {
    const data = req.body;
    insertProduct(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// delete a product
const deleteProduct = (req, res) => {
    const id = req.params.id;
    deleteProductByID(id, (err, results) => {
      if (err) {
        res.send(err);
      } else {
        res.json(results);
      }
    });
  };

  // update a product
const updateProduct = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    updateProductByID(id, data, (err, results) => {
      if (err) {
        res.send(err);
      } else {
        res.json(results);
      }
    });
  };
  
  module.exports = {
    showProducts,
    showProductById,
    createProduct,
    deleteProduct,
    updateProduct,
  };