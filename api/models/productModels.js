// import connection
const db = require("../config/db.js");
  
// Get All Products
const getProducts = (result) => {
    db.query("SELECT * FROM Products", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
  
// Get Single Product
const getProductById = (id, result) => {
    db.query("SELECT * FROM Products WHERE prodID = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
  
// Insert Product to Database
const insertProduct = (data, result) => {
    db.query("INSERT INTO Products SET ?;", [data], (err, results) => {             
        if(err) {
            console.log('Database error');
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}


// Update an existing product
const updateProductByID = (id, data, result) => {
    db.query(
      "UPDATE Products SET prodName = ?, quantity = ?, amount = ?, category = ?, prodURL = ? WHERE prodID = ?",
      [
        data.prodName,
        data.quantity,
        data.amount,
        data.category,
        data.prodURL,
        id,
      ],
      (err, results) => {
        if (err) {
          console.log(err);
          result({ error: "Failed to update product." }, null);
        } else {
          result(null, results);
        }
      }
    );
  };                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      

// Delete a product
const deleteProductByID = (id, result) => {
    db.query('DELETE FROM Products WHERE prodID = ?', [id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
        
    });
};

module.exports = {
    getProducts,
    getProductById,
    insertProduct,
    updateProductByID,
    deleteProductByID,
  };