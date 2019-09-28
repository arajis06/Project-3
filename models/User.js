const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Schema constructor, to create a new UserSchema object
const UserSchema = new Schema({
    first_name: {
    type: String,
    required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    // Set date when added to DB
    date: {
        type: Date,
        default: Date.now
    }
});

// This creates our model from the above schema, using mongoose's model method
const User = mongoose.model("users", UserSchema);

// Export the Users model
module.exports = User;
