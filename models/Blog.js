const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Schema constructor, to create a new UserSchema object
const BlogSchema = new Schema({
    topic: {
    type: String,
    required: true
    },
    // last_name: {
    //     type: String,
    //     required: true
    // },
    title: {
        type: String,
        required: true,
    },
    article: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true
        },
    
    date: {
        type: Date,
        default: Date.now
    }
});

import mongoose, { Schema } from 'mongoose';

const ReviewSchema = new Schema({
  body: String,
  username: String,
  rating: Number,
}, {
  toJSON: {
    virtuals: true,
  },
});

const ReviewModel = mongoose.model('Review', ReviewSchema);
export default ReviewModel;

// This creates our model from the above schema, using mongoose's model method
const Blog = mongoose.model("Blog", BlogSchema);

// Export the Users model
module.exports = Blog;
