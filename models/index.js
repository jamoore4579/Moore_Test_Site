// import all models
const Profile = require('./Plant');
const User = require('./User');

// create associations
User.hasMany(Profile, {
  foreignKey: 'user_id'
});

Profile.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Profile };