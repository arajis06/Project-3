//=== Dependencies ===//
const express = require("express");
const app = express();
const cors = require("cors");  
const mongoose = require("mongoose");
const passport = require("passport");
const routes = require("./routes");
const users = require('./routes/api/users');
// const blog = require('./routes/api/blog');
//=== Set Port ===//
const PORT = process.env.PORT || 3001;

//=== Configure middleware ===//z
// Parse request body as JSON
app.use(express.urlencoded({extended:false}));
app.use(express.json());
//Cross-domain request
 //app.use(cors());

//Cross-domain request
// app.use(cors());

// DB config
// Alexis, do we need this next line?
const db = require('./config/keys').MONGODB_URI;
//=== Database Setup ===//
//  const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/bootcamp_hub";

//Connect to Mongo DB
// The following line used to be have "db" instead of "MONGODB_URI" - look above for db const
    mongoose.connect(db, { useNewUrlParser: true })
        .then(() => console.log("Connected to MongoDB"))
        .catch(err => console.log(err));

    // mongoose.connect(MONGODB_URI, { useNewUrlParser: true })
    //     .then(() => console.log("Connected to MongoDB"))
    //     .catch(err => console.log(err));


//=== Passport middleware ===//
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);

// ==== Routes ===//
// app.use('/', require('./routes/index'));
app.use(routes);
app.use("/api/users", users);
// app.use("/api/blog", blog);



// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    }
    

// Start the server
// app.listen(PORT, () => {
//     console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
// });
// Start the API server without shorthand
app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
    