const db = require("../models");
const {User} = require("../models");
require('dotenv').config();

module.exports = {
    //=======================================ROUTES WORKS=========================================FINDS ALL POSTS============    
    findAll: function (req, res) {
        db.Post.findAll({})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },


    getPost: async function (req, res) {
      try {
          const postData = await db.Post.findOne({ where: {id: req.params.id}});
          const commentData = await db.Comment.findAll(
              {
                  where: {
                      post_id: req.params.id
                  },
                  include: [
                      { model: User}
                  ],
              }
          );
          const comments = commentData.map((comment) => comment.get({plain: true}));
          console.log(comments);
          if (!postData) {
              res.status(404).json({message: "No Post Found Matching Your Selection"});
          }
          res.status(200).json({post: postData, comment: commentData});
      }catch (err) {
          console.log(err);
          res.status(500).json(err);
      }
    },
    //=======================================ROUTES WORKS=========================================FINDS ONE USER ON LOGIN====
    findOne: async function (req, res) {

        try {
            userData = await db.User.findOne({ email: req.body.email, password: req.body.password })
            console.log("******2")
            console.log(userData)

            if (!userData) {
                res.status(500).json({ message: 'Incorrect Email or Password, please try again!' });
                return;
            }
            console.log("-------")
            //saves session
            req.session.save(() => {
                req.session.user_id = userData.id;
                req.session.logged_in = true;
                res.json({ user: userData, message: 'You Are Now Logged In!' });
            });
            console.log('hi user');
        } catch (err) {
            console.log(err)
            res.status(400).json(err);
        }
    },
    //=======================================ROUTES WORKS=========================================CREATES A NEW USER
    create: function (req, res) {
        db.User.create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    //=======================================ROUTES WORKS=========================================CREATES A NEW COMMENT
    postComment: async function (req, res) {
        const goodParams = { ...req.body, user_id: req.session.user_id }
        try {
            const commentData = await db.Comment.create(goodParams);
            console.log('*******review Created');
            res.status(200).json(commentData);
        } catch (err) {
            res.status(400).json(err);
        }
    }

}

//=======================================ROUTES WORKS=========================================FINDS ALL USERS
    // getUsers: function (req, res) {
    //     db.User.findAll({})
    //       // .sort({ _id: -1 })
    //       .then(dbModel => res.json(dbModel))
    //       .catch(err => res.status(422).json(err));
    //   },
