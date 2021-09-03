const Comment = require('./comment');
const User = require('./user');
const Post = require('./post');

User.hasMany(Comment, {foreignKey: 'user_id'});
Comment.belongsTo(User, {foreignKey: 'user_id'});
Post.hasMany(Comment, {foreignKey: 'post_id'});

module.exports = {User, Comment, Post};