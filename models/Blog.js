const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  author: { type: String, required: true },
  article: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;










// const mongoose = require("mongoose");

// // Save a reference to the Schema constructor
// const Schema = mongoose.Schema;


// const blogSchema = new Schema({
      
//     title: {
//         type: String,
//         required: true,
//     },
//     category: {
//         type: String,
//         required: true,
//     },
//     author: {
//         type: String,
//         required: true,
//     },
//     article: {
//         type: String,
//         required: true,
//     },
    
//     date: {
//         type: Date,
//         default: Date.now
//     }
// });

// // import mongoose, { Schema } from 'mongoose';

// // const ReviewSchema = new Schema({
// //   body: String,
// //   username: String,
// //   rating: Number,
// // }, {
// //   toJSON: {
// //     virtuals: true,
// //   },
// // });

// // const ReviewModel = mongoose.model('Review', ReviewSchema);
// // export default ReviewModel;

// // This creates our model from the above schema, using mongoose's model method
// const Blog = mongoose.model("Blog", blogSchema);

// // Export the Users model
// module.exports = Blog;
