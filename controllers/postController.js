const db = require("../models");
require('dotenv').config();

module.exports = {
//=======================================ROUTES WORKS=========================================FINDS ALL POSTS============    
    findAll: function (req, res) {
        db.Post.findAll({})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
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
    create: function (req, res) {
        db.User.create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }


}
