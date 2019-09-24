//=== Dependencies ===//
const express = require("express");
const cors = require("cors");  
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
const routes = require("./routes");


//=== Set Port ===//
const PORT = process.env.PORT || 3001;

//=== Configure middleware ===//
// Parse request body as JSON
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
app.use(express.static("client/build"));
}

//Cross-domain request
app.use(cors());

//=== Database Setup ===//
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/bootcamp_hub";

//Connect to Mongo DB
mongoose.connect(MONGODB_URI)
    // mongoose
    // .connect(MONGODB_URI, { useNewUrlParser: true })
        .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log(err));

//=== Passport middleware ===//
app.use(passport.initialize());
// Passport config
// require("./config/passport")(passport);
// Routes
app.use(routes);


// Start the server
app.listen(PORT, () => {
    console.log("App running on port " + PORT + "!");
});