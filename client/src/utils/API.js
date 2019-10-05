import axios from "axios";

export default {
  // Gets all Blogs
  getBlogs: function() {
    return axios.get("/api/blog");
  },
  // Gets the blog with the given id
  getBlog: function(id) {
    return axios.get("/api/blog/" + id);
  },
  // Deletes the blog with the given id
  deleteBlog: function(id) {
    return axios.delete("/api/blog/" + id);
  },
  // Saves a blog to the database
  saveBlog: function(blogData) {
    return axios.post("/api/blog", blogData);
  }
};
// import axios from "axios";

// export default {
//   // Gets all books
//   getBooks: function() {
//     return axios.get("/api/books");
//   },
//   // Gets the book with the given id
//   getBook: function(id) {
//     return axios.get("/api/books/" + id);
//   },
//   // Deletes the book with the given id
//   deleteBook: function(id) {
//     return axios.delete("/api/books/" + id);
//   },
//   // Saves a book to the database
//   saveBook: function(bookData) {
//     return axios.post("/api/books", bookData);
//   }
// };
