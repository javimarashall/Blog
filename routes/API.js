const router = require("express").Router();
const postController = require("../controllers/postController");

//=======================================ROUTES WORKS=========================================
router
    .route("/")
    .get(postController.findAll);
//=======================================ROUTES WORKS=========================================
router
    .route("/:id")
    .get(postController.getPost);

router
    .route("/post")
    .post(postController.createPost);

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
    .post(postController.postComment);

module.exports = router;

//=======================================ROUTES WORKS=========================================
// router
//     .route("/users")
//     .get(postController.getUsers);
