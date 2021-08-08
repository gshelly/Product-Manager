import ProductForm from "../components/ProductManagerForm";
import ProductsList from '../components/ProductsList'
import React, { useState, useEffect } from 'react';

const Main = (props) => {
  const [productId, setProductId] = useState("")
  

  useEffect(() => {
    props.setProductId(productId)
  })

  return (
    <div>
      <ProductForm />
      <ProductsList setProductId={setProductId}/>
    </div>
  )
}

export default Main;