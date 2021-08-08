const ProductController = require('../controller/product.controller')

module.exports = app => {
  app.get("/api/products", ProductController.getAllProducts)
  app.post("/api/products", ProductController.addNewProducts)
  app.delete("/api/products/delete/:id", ProductController.deleteExistingProduct)
  app.get("/api/products/:id", ProductController.getSingleProduct)
  app.put("/api/products/edit/:id", ProductController.updateExistingProduct)
}