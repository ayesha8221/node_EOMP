const { router } = require("json-server");
const { getUsers, getUserByID, insertUser, deleteUserByID, updateUserByID} =require("../models/userModels.js")
// const {bcrypt} = require('bcrypt');
const bcrypt = require('bcrypt')
const {createToken} = require('../middleware/AuthenticateUser.js')


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
const createUser = (req, res) => {
  const data = req.body;
  data.userPass = bcrypt.hashSync(data.userPass, 10);
  const user = {
    emailAdd: data.emailAdd,
    userPass: data.userPass,
  };
  let token = createToken(user);
  // if (!data.userPass) {
  //   return res.status(400).json({ error: "Password is required." });
  // }
   
  // Check if userPass is provided in the request body
  insertUser(data, (err, results) => {
    if (err) throw err;
    res.cookie("authorizedUser", token, {maxAge: 3600000, httpOnly: true});
    res.json({results, token})
  });
};

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

  // class users {
  //   login(req, res) {
  //     const { emailAdd, userPass } = req.body;
  //     const query = `
  //     SELECT userID, firstName, lastName, userAge, Gender, userRole,
  //     emailAdd, userProfile, userPass
  //     FROM users
  //     WHERE emailAdd = ?;
  //   `;
  //     db.query(query, [emailAdd], async (err, result) => {
  //       if (err) throw err;
  //       if (!result?.length) {
  //         res.json({
  //           status: res.statusCode,
  //           msg: "You provided a wrong email.",
  //         });
  //       } else {
  //         await compare(userPass, result[0].userPass, (cErr, cResult) => {
  //           if (cErr) throw cErr;
  //           // Create a token
  //           const token = createToken({
  //             emailAdd,
  //             userPass,
  //           });
  //           if (cResult) {
  //             res.json({
  //               msg: "Logged in",
  //               token,
  //               result: result[0],
  //             });
  //           } else {
  //             res.json({
  //               status: res.statusCode,
  //               msg: "Invalid password or you have not registered",
  //             });
  //           }
  //         });
  //       }
  //     });
  //   }
  // }
  
  module.exports = {
    showUsers,
    showUserById,
    createUser,
    deleteUser,
    updateUser,
  };