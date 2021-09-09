const router = require("express").Router();
const postController = require("../controllers/postController");

//=======================================ROUTES WORKS=========================================
router
    .route("/")
    .get(postController.findAll);

router
    .route("/:id")
    .get(postController.getPost);

//=======================================ROUTES WORKS=========================================    
router
    .route("/login")
    .post(postController.findOne);
//=======================================ROUTES WORKS=========================================
router
    .route("/register")
    .post(postController.create);

router
    .route("/comment")
    .post(postController.postComment)

module.exports = router;

//=======================================ROUTES WORKS=========================================
// router
//     .route("/users")
//     .get(postController.getUsers);
