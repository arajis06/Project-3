const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

// const Resource = require("../../models/Resource");
const resourceController = require("../../controllers/resourceController");

router.route("/create").post((req, res) => {
  resourceController.create(req, res); 
}); 

router.route("/resources")
  .get(resourceController.findAll); 

module.exports = router;