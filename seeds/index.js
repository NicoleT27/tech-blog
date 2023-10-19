const sequelize = require('../config/connection');
const blog = require('../models/blog');
const blogData = require('./blog-seeds.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await blog.bulkCreate(blogData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
