const path = require("path");
const router = require("express").Router();
const resources = require("./resources");
// const users = require("../");
const users = require("./users");

// dem resource routes
router.use("/resources", resources);
// dem user routes
router.use("/login", users);

router.use("/register", users);

router.use("/profile", users);

// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;