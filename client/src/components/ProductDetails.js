import React, { useState, useEffect } from 'react'
import '../style/style.css'
import axios from 'axios'
import { navigate } from "@reach/router";

const ProductDetails = (props) => {
  let { productId } = props
  const [displayProduct, setProduct] = useState({})
  
  //creating web session to store product Id for later use if page gets reloaded.
  productId = productId ? productId : localStorage.getItem("lastProductId")

  useEffect(() => {
    axios.get('http://localhost:8000/api/products/' + productId)
      .then(response => {
        localStorage.setItem("lastProductId", productId)
        setProduct(response.data.singleProduct)
      })
      .catch(error => console.log(error))
  },[productId])

  const homePage = () => {
    navigate('/')
  }

  const editProduct = () => {
    props.setExistingProduct(displayProduct)
    navigate('/products/edit/' + productId)
  }

  const handleDelete = (e) => {
    e.preventDefault()
    axios.delete(`http://localhost:8000/api/products/delete/${productId}`)
      .then(res => {
        navigate('/')
        console.log(res)
      })
      .catch(err => console.log(err))
  }

  return (
    <table id="result-table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Price</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td> {displayProduct.title} </td>
          <td> ${displayProduct.price} </td>
          <td style={{width:"200px"}}> {displayProduct.description} </td>
        </tr>
        <tr>
          <td colSpan="3"> 
            <div style={{display:"flex", justifyContent:"space-evenly"}}>
            <button className="detailsButton" onClick={homePage}> Home </button>
            <button className="detailsButton" onClick={editProduct}> Edit </button>
            <button className="detailsButton" onClick={(e) => handleDelete(e)}> Delete </button>
            </div>
            </td>
        </tr>
      </tbody>
    </table>
  )
}

export default ProductDetails