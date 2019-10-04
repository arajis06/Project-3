const router = require("express").Router();

// const Resource = require("../../models/Resource");
const resourceController = require("../../controllers/resourceController");
// the real route will be "api/resources/"
router.route("/")
  .get(resourceController.findAll)
  .post(resourceController.create);




// Matches with "/api/resources/:id"
// router
//   .route("/:id")
//   .get(resourceController.findById)
//   .put(resourceController.update)
//   .delete(resourceController.remove);

module.exports = router;