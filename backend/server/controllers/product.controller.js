const Product = require('../models/product.model');

module.exports.index = (req, res) => {
    res.json({
        message: "Hello World"
    });
}

module.exports.findAllProducts = (req, res) => {
    Product.find()
    .then(allProducts => res.json({message: allProducts}))
    .catch(err => res.json({message: "Something went wrong ", error: err}));
}

module.exports.findOneProducts = (req, res) => {
    Product.findOne({_id: req.params._id})
    .then(oneProduct => res.json({message: oneProduct}))
    .catch(err => res.json({message: "Something went wrong ", error: err}));
}

module.exports.createProduct = (req, res) => {
    const {title, price, description} = req.body;
    Product.create({
        title,
        price,
        description
    })
    .then(product => res.json(product))
    .catch(err => res.json(err));
}

module.exports.deleteOneProduct = (req, res) => {
    Product.deleteOne({_id: req.params._id})
    .then(deletedProduct => res.json({message: deletedProduct}))
    .catch(err => res.json({message: "Something went wrong ", error: err}));
}

module.exports.deleteProducts = (req, res) => {
    Product.deleteMany()
    .then(deletedProducts => res.json({message: deletedProducts}))
    .catch(err => res.json({message: "Something went wrong ", error: err}));
}

module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate(
            {_id: req.params._id},
            req.body,
            {new: true, runValidators: true}
        )
        .then(updatedProduct => res.json({message: updatedProduct}))
        .catch(err => res.json({message: "Something went wrong ", error: err}));
}