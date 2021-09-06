const Comment = require('./comment');
const User = require('./User');
const Post = require('./Post');

User.hasMany(Comment, {foreignKey: "User_id"});
Comment.belongsTo(User, {foreignKey: "User_id"});
Post.hasMany(Comment, {foreignKey: "Post_id"});

module.exports = {User, Comment, Post};