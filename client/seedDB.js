// const mongoose = require("mongoose");
// const db = require("../models");

// // This file empties the Books collection and inserts the books below

// mongoose.connect(
//   process.env.MONGODB_URI ||
//   "mongodb://localhost/bootcamp_hub"
// );

// const blogSeed = [
//   {
//     topic: "Artificial Ingelligence",
//     title: "AI 101",
//     article:
//       "Sometimes it seems like every other website, app, or productivity tool is citing Artificial Intelligence (AI) as the secret ingredient in their recipe for success. What’s less common is an explanation of what AI is, why it’s so cool, and how companies are leveraging it to provide better user experiences. If you don’t know much about AI, the absence of an explanation can be confusing. If you’re inclined towards a fear of a computer-instigated apocalypse, it may even be scary. Artificial Intelligence is complicated, and it’s constantly evolving, but that doesn’t mean that it should be confusing or anxiety inducing — especially not when your personal information is involved.",
//     date: new Date(Date.now())
//   },
//   {
//     topic: "Interview",
//     title: "Cracking the coding interview in 15 days",
//     article:
//    " I am not a recruiter. I am a software engineer. And as such, I know what it's like to be asked to whip up brilliant algorithms on the spot and then write flawless code on a whiteboard. I've been through this as a candidate and as an interviewer." 

// +" Cracking the Coding Interview, 6th Edition is here to help you through this process, teaching you what you need to know and enabling you to perform at your very best. I've coached and interviewed hundreds of software engineers. The result is this book." ,   
// date: new Date(Date.now())
//   },
 
// ];

// db.Blog
//   .remove({})
//   .then(() => db.Blog.collection.insertMany(blogSeed))
//   .then(data => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });
