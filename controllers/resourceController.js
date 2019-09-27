// Copied from Unit 20 Activity 9
const db = require("../models");

// Defining methods for the booksController
module.exports = {
    create: function(req, res) {
      console.log(req)
    db.Resource
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
    findAll: function(req, res) {
    db.Resource
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
}
