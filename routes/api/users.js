//STEP 3 IF INPUT FIELDS ARE VALID CHECK IF USER EXIST -THEN ROUTE
const express = require("express");
const router = express.Router();
// const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// Load User model
const User = require("../../models/User");
// concurrently
// router.use(cors());

// REGISTER ROUTE
router.post("/register", (req, res) => {
  
    // Form validation
  const { errors, isValid } = validateRegisterInput(req.body);
  // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
  User.findOne({ 
    email: req.body.email 
  })
  .then(user => {
      if (user) {
        return res.status(400).json({ email: "Email already exists" });
      } 
      else {
        const today = new Date()
        const newUser = new User({
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          email: req.body.email,
          password: req.body.password,
          date: today
        });
  // Hash password before saving in database
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            // Set password to hashed
            newUser.password = hash;
            // User.create(newUser)
            //   .then(user => {
            //     res.json({status: user.email + 'registered!'})
            //   })
            //   .catch(err => {
            //     res.send('error: ' + err)
            //   })
            newUser
              .save()
              .then(user => 
                res.json(user)) 
              .catch(err => console.log(err));
          });
        });
      }
    });
  });

//LOGIIN ROUTE
router.post("/login", (req, res) => {

  // Form validation
const { errors, isValid } = validateLoginInput(req.body);
// Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

// Find user by email
  User.findOne({ 
    email: req.body.email 
  })
  .then(user => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }
// Check password
    bcrypt.compare(req.body.password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          _id: user._id,
          first_name: user.first_name,
          last_name: user.last_name
          // email: user.email
        };
// Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926 // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } 
      else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    })
  })
  .catch(err => {
    res.send("error: " + err);
  })
});

//PROFILE
router.get('/account', (req, res) => {
  var decoded =jwt.verify(req.headers['authorization'], keys.secretOrKey)

  User.findOne({
    _id:decoded._id
  })
  .then(user => {
    if(user) {
      res.send("User does not exist")
    }
  })
  .catch(err => {
    res.send('error: ' + err)
  })
})


  module.exports = router;