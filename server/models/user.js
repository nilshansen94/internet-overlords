const Sequelize = require('sequelize');
const connection = require('../connection');

const User = connection.define('user', {
  user_id: { type: Sequelize.BIGINT, primaryKey: true, autoIncrement: true },
  username: { type: Sequelize.STRING(30), allowNull:false },
  email: { type: Sequelize.STRING(50)},
  password: { type: Sequelize.STRING(100)},
  resettoken: { type: Sequelize.STRING},
  resettokenexpires: { type: Sequelize.DATE},
  login_strategy: { type: Sequelize.STRING(10), defaultValue: 'local'},
  picture: { type: Sequelize.STRING, defaultValue: './assets/img/profil/unknown_profile.png' },
  twoFASecret: {type: Sequelize.STRING(100)},
  twoFAEnabled: {type: Sequelize.BOOLEAN, defaultValue: 'false'}
});


module.exports = User;
