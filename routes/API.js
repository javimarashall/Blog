const router = require("express").Router();
const postController = require("../controllers/postController");

//=======================================ROUTES WORKS=========================================
router
    .route("/")
    .get(postController.findAll);

//=======================================ROUTES WORKS=========================================    
router
    .route("/login")
    .post(postController.findOne);

router
    .route("/register")
    .post(postController.create);

module.exports = router;