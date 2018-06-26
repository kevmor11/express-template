const Product = require('../model/Product'),
      Model = require('objection').Model,
      knex = require('../connection'),
      configs = require('../../config/configs');

Model.knex(knex);

module.exports = {
  listProducts: (page = 0) => {
    return Product
    .query()
    .select(
      'id',
      'name',
    )
    .offset(10 * page)
	  .page(page, configs.pageSize);
  },

  listProductById: (id) => {
  	return Product
    .query()
    .select(
      'name',
    )
    .where({ id })
  },

  createProduct: (name) => {
  	return Product
    .query()
    .insert([{
      name,
    }])
  },

  updateProduct: (id, name) => {
  	return Product
    .query()
    .where({ id })
    .update({
      name,
    })
  },
}
