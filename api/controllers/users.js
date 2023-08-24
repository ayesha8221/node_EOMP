const { router } = require("json-server");
const { getUsers, getUserByID, insertUser, deleteUserByID, updateUserByID} =require("../models/userModels.js")
// const {bcrypt} = require('bcrypt');
const bcrypt = require('bcrypt')
const createToken = require('../middleware/AuthenticateUser.js')


// Get All Users
const showUsers = (req, res) => {
    getUsers((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Get Single User 
const showUserById = (req, res) => {
    getUserByID(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}


// app.post('/Users, (req, res) => {
//     try {
//       const hashedPassword = bcrypt.hash(req.body.password, 10)
//       const userData = {
//         fullname: req.body.fullname,
//         email: req.body.email,
//         username: req.body.username,
//         password: hashedPassword
//     };
//     const createUser = 'INSERT INTO Users SET ?';
//   con.query(sql, userData, (err, result) => {
//       if (err) {
//           console.error('Database error:', err);
//           res.status(500).send('Error during registration');
//       } else {
//           res.redirect('/login');
//       }
//   });
// Add New User
const  createUser = (req, res) => {
    const data = req.body;
const user = {
  emailAdd: data.emailAdd,
  userPass: data.userPass,
}

let token = createToken(user)
    data.userPass =  bcrypt.hashSync(data.userPass, 10);
    insertUser(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
          res.cookie("authorizedUser", token, {maxAge: 360000, httpOnly: true})
            res.json(results, token);

        }
    });
}

// delete a user
const deleteUser = (req, res) => {
    const id = req.params.id;
    deleteUserByID(id, (err, results) => {
      if (err) {
        res.send(err);
      } else {
        res.json(results);
      }
    });
  };

  // update a user
const updateUser = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    updateUserByID(id, data, (err, results) => {
      if (err) {
        res.send(err);
      } else {
        res.json(results);
      }
    });
  };
  
  module.exports = {
    showUsers,
    showUserById,
    createUser,
    deleteUser,
    updateUser,
  };