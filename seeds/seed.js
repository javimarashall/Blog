const sequelize = require('../config/connection');

const Post = require('../models/Post');
const User = require('../models/User');
const Comment = require('../models/Comment');

const userData = require('./userData.json');
const postData = require('./postData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    
    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });
    
    await Post.bulkCreate(postData, {
        returning: true,
    });

    await Comment.bulkCreate(commentData, {
        returning: true,
    });
    console.log('----Seeded');
    process.exit(0);
};
seedDatabase();