const router = require("express").Router();
const postController = require("../controllers/postController");

//=======================================ROUTES WORKS=========================================
router
    .route("/")
    .get(postController.findAll);
//=======================================ROUTES WORKS=========================================
router
    .route("/post/:id")
    .get(postController.getPost);
//=======================================ROUTES WORKS=========================================
router
    .route("/post")
    .post(postController.createPost);
//=======================================ROUTES WORKS=========================================
router
    .route("/post/:id")
    .delete(postController.deletePost);

router
    .route("/post/:id")
    .put(postController.updatePost);
//=======================================ROUTES WORKS=========================================    
router
    .route("/login")
    .post(postController.findOne);
//=======================================ROUTES WORKS=========================================
router
    .route("/register")
    .post(postController.create);
//=======================================ROUTES WORKS=========================================
router
    .route("/comment")
    .post(postController.postComment);
//=======================================ROUTES WORKS=========================================
router
    .route("/comment/:id")
    .get(postController.getComment);
//=======================================ROUTES WORKS=========================================
router
    .route("/comment/:id")
    .delete(postController.deleteComment);
//=======================================ROUTES WORKS=========================================
router
    .route("/comment/:id")
    .put(postController.updateComment);
module.exports = router;

//=======================================ROUTES WORKS=========================================
// router
//     .route("/users")
//     .get(postController.getUsers);
