import Main from './views/Main';
import './App.css';
import { Router } from '@reach/router';
import ProductDetails from './components/ProductDetails';
import React, { useState } from 'react';
import UpdateProductForm from './components/UpdateProduct';

function App() {
  //Getting ProductId from ProductList -> Main.js -> App.js -> ProductDetails
  const [productId, setProductId] = useState("")
  const [existingProduct, setExistingProduct] = useState({})

  return (
    <div className="App">
      <Router>
        <Main path="/"  setProductId={setProductId}/>
        <ProductDetails productId={productId} setExistingProduct={setExistingProduct} path='/products/:id' />
        <UpdateProductForm existingProduct={existingProduct} path='/products/edit/:id' />
      </Router>
    </div>
  );
}

export default App;
