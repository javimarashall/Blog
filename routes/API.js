const router = require("express").Router();
const postController = require("../controllers/postController");

router
    .route("/")
    .get(postController.findAll);

router
    .route("/login")
    .post(postController.findOne);

router
    .route("/register")
    .post(postController.create);

module.exports = router;