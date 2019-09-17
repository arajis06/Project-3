const express = require("express");
const cors = require("cors");
// const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const passport = require("passport");
const users = require("./routes/api/users");


const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());
app.use(cors());

const MONGODB_URI = process.env.MONGODB_URI || "'mongodb://localhost/bootcamp_hub'";
//DB Config
// const db = require("./config/keys").MONGODB_URI;
//Connect to Mongo DB
// mongoose.connect(MONGODB_URI);
    mongoose
    .connect(MONGODB_URI, { useNewUrlParser: true })
        .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);

// var Users = require ('./routes/UsersRoute');

// app.use('/users', Users);

// Start the server
app.listen(PORT, () => {
    console.log("App running on port " + PORT + "!");
});



