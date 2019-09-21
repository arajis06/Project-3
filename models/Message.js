const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Schema constructor, to create a new ResourceSchema object
const MessageSchema = new Schema({
    usersName: {
        type: String,
        required: true
    },
    
    category: {
        type: String,
        required: true,
    },
    description: {
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
const Resource = mongoose.model("resources", ResourceSchema);

// Export the Users model
module.exports = Resource;