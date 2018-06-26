const ProductRepository = require('../db/repository/ProductRepository');

// Get all products.
exports.getProducts = (req, res) => {
  let page = Number(req.query.page);
  if(!page) {
    page = 0;
  }
  ProductRepository.listProducts(page).then(products => {
    products = products.results;
    const productCount = products.length;
    res.render('products', { products, page, productCount });
  });
};

/**
Get Create Product page

Request:
id - ID of Product being Edited, if one exists
*/
exports.getCreateProduct = (req, res) => {
  const id = req.query.id;
  let title = '';

  if(id) {
    ProductRepository.listProductById(id).then(product => {
      product = product[0];
      title = 'Edit';
      res.render('edit-product', { product, id, title });
    });
  } else {
    const product = '';
    title = 'Add';
    res.render('edit-product', { product, title });
  }
};

/**
Post info to create a product

Request:
name - Name of Product being created
product_shopify_id - Shopify ID of Product being created
discount_code - Discount Code of Product being created
*/
exports.postCreateProduct = (req, res) => {
  const name = req.body.name;

  ProductRepository.createProduct(name).then(product => {
    product = product[0];
    if(product) {
      res.render('success', { title: 'Product Uploaded' });
    }
  });
};

/**
Post info to update a product

Request:
name - Name of Product being updated
product_shopify_id - Shopify ID of Product being updated
discount_code - Discount Code of Product being updated
id - ID of Product being updated

*/
exports.postUpdateProduct = (req, res) => {
  const name = req.body.name,
        id = req.body.id;

  ProductRepository.updateProduct(id, name).then(product => {
    if(product) {
      res.render('success', { title: `Product ${name} Updated` });
    }
  });
};
