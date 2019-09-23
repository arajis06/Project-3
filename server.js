//=== Dependencies ===//
require('dotenv').config();
// const path = require('path');
const express = require("express");
const cors = require("cors");  
const mongoose = require("mongoose");
const passport = require("passport");
const users = require("./routes/api/users");

//=== Set Port ===//
const PORT = process.env.PORT || 3001;

// Initialize Express
const app = express();

//=== Configure middleware ===//
// Parse request body as JSON
app.use(express.urlencoded({extended: true}));
app.use(express.json());
//Cross-domain request
app.use(cors());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
app.use(express.static("client/build"));
}

// DB config
const db = require('./config/keys').MONGODB_URI;
//=== Database Setup ===//
//  const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/bootcamp_hub;

//Connect to Mongo DB
    mongoose.connect(db, { useNewUrlParser: true })
        .then(() => console.log("Connected to MongoDB"))
        .catch(err => console.log(err));
    
//=== Passport middleware ===//
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);

//=== Routes ===//
app.use("/api/users", users);

// Start the server
app.listen(PORT, () => {
    console.log("App running on port " + PORT + "!");
});



