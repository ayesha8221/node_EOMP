const db = require("../config/db.js");
const { createToken } = require("../middleware/AuthenticateUser.js")
const { compare } = require("bcrypt")
// const bcrypt = require ('bcrypt');
// Get All Users
const getUsers = (result) => {
    db.query("SELECT * FROM Users", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}


// Get Single User
const getUserByID = (id, result) => {
    db.query("SELECT * FROM Users WHERE userID = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}

// Insert Product to Database
const insertUser = (data, result) => {
    db.query("INSERT INTO Users SET ?;", [data], (err, results) => {             
        if(err) {
            console.log('Database error');
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

 const userLogin = (req, res) => {
    const { emailAdd, userPass } = req.body;
    const query = `SELECT firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile FROM Users WHERE emailAdd = '${emailAdd}'`;
    db.query(query, async (err, result) => {
      if (err) throw err;
      if (!result?.length) {
        res.json({
          status: res.statusCode,
          message: "Incorrect email address!",
        });
      } else {
        await compare(userPass, result[0].userPass, (cErr, cResult) => {
          if (cErr) throw cErr;
          // create token
          const token = createToken({
            emailAdd,
            userPass,
          });
          // save token
          res.cookie("LegitUser", token, {
            maxAge: 3600000,
            httpOnly: true,
          });
          if (cResult) {
            res.json({
              message: "You can now enter another time",
              token,
              result: result[0],
            });
          } else {
            res.json({
              status: res.statusCode,
              message: "Unregistered user or incorrect password!",
            });
          }
        });
      }
    });
  };

// Update an existing user
const updateUserByID = (id, data, result) => {
    db.query(
      "UPDATE Users SET firstName = ?, lastName = ?, userAge = ?, Gender = ?, userRole = ? , emailAdd = ? , userPass = ? , userProfile = ? WHERE userID = ?",
      [
        data.firstName,
        data.lastName,
        data.userAge,
        data.Gender,
        data.userRole,
        data.emailAdd,
        data.userPass,
        data.userProfile,
        id,
      ],
      (err, results) => {
        if (err) {
          console.log(err);
          result({ error: "Failed to update user." }, null);
        } else {
          result(null, results);
        }
      }
    );
  };

// Delete a User
const deleteUserByID = (id, result) => {
    db.query('DELETE FROM Users WHERE userID = ?', [id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
        
    });
};

module.exports = {
    getUsers,
    getUserByID,
    insertUser,
    updateUserByID,
    deleteUserByID,
    userLogin
  };