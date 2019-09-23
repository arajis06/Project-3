//=== Dependencies ===//
require('dotenv').config();
const path = require("path");
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
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
// app.use(express.static("client/build"));
// }
app.use(express.static(path.join(__dirname, "client", "build")));

//Cross-domain request
app.use(cors());

// DB config
const db = require('./config/keys').MONGODB_URI;
//=== Database Setup ===//
// const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/bootcamp_hub";

//Connect to Mongo DB
// mongoose.connect(MONGODB_URI)
//     // mongoose
//     // .connect(MONGODB_URI, { useNewUrlParser: true })
//         .then(() => console.log("Connected to MongoDB"))
//     .catch(err => console.log(err));
// mongoose.connect(MONGODB_URI)
    mongoose
    .connect(db, { useNewUrlParser: true })
        .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log(err));
    
//=== Passport middleware ===//
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);

//=== Routes ===//
app.use("/api/users", users);

//=== Routes ===//
// app.use('/', require('./routes/index'));
// app.use('/', require('./routes/api/users'));

app.get("*", (req,res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
// Start the server
app.listen(PORT, () => {
    console.log("App running on port " + PORT + "!");
});



