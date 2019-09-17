const express = require("express");
const cors = require("cors");
// const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());
app.use(cors());

const MONGODB_URI = process.env.MONGODB_URI || "'mongodb://localhost/bootcamp_hub'";
//Connect to Mongo DB
// mongoose.connect(MONGODB_URI);
    mongoose
    .connect(MONGODB_URI, { useNewUrlParser: true })
        .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log(err));

var Users = require ('./routes/UsersRoute');

app.use('/users', Users);

// Start the server
app.listen(PORT, () => {
    console.log("App running on port " + PORT + "!");
});



