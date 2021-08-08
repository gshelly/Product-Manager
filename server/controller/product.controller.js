const Product = require('../models/product.models')

const getAllProducts = (req, res) => {
  Product.find()
  .then(allProducts => res.json({allProducts: allProducts}))
  .catch(err => res.json({errorMessage: err}))
}

const addNewProducts = (req, res) => {
  Product.create({
    title: req.body.title,
    price: req.body.price,
    description: req.body.description
  })
  .then(allProducts => res.json({allProducts: allProducts}))
  .catch(err => res.json({errorMessage: err}))
}

const deleteExistingProduct = (req, res) => {
  Product.deleteOne({_id: req.params.id})
    .then((deletedProduct => res.json({deletedProduct: deletedProduct})))
    .catch((err) => res.json({errorMessage: err}))
}

const getSingleProduct = ((req, res) => {
  Product.findOne({_id: req.params.id})
  .then((product) => res.json({singleProduct: product}))
  .catch((err) => res.json({errorMessage: err}))
})

const updateExistingProduct = ((req, res) => {
  Product.findOneAndUpdate({_id: req.params.id},
    req.body,
    {new:true}
    )
    .then((updatedProduct) => res.json({updatedProduct:updatedProduct}))
    .catch(err => res.json({errorMessage: err}))
})
module.exports = {
  getAllProducts,
  addNewProducts,
  deleteExistingProduct,
  getSingleProduct,
  updateExistingProduct
}