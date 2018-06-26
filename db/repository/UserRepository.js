const User = require('../model/User'),
      Model = require('objection').Model,
      knex = require('../connection'),
      configs = require('../../config/configs');

Model.knex(knex);

module.exports = {
  getUserByUsername: (username) => {
  	return User
	  .query()
	  .where('username', '=', username)
  },

  listUsers: (page) => {
  	return User
	  .query()
	  .page(page - 1, configs.pageSize);
  },

}
