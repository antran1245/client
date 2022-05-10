const ProductController = require('../controllers/product.controller');

module.exports = function(app) {
    app.get('/api', ProductController.index);
    app.get('/api/products', ProductController.findAllProducts);
    app.get('/api/products/:_id', ProductController.findOneProducts);
    app.put('/api/products/:_id', ProductController.updateProduct);
    app.post('/api/products/new', ProductController.createProduct);
    app.delete('/api/products/delete/:_id', ProductController.deleteOneProduct);
    app.delete('/api/products/delete', ProductController.deleteProducts);
}