import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../style/style.css'
import { Link } from '@reach/router';



const ProductsList = (props) => {
  const [displayProduct, setProduct] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8000/api/products')
      .then(response => {
        setProduct(response.data.allProducts)
      })
      .catch(error => console.log(error))
  })

  const handleDelete = (e, productId) => {
    e.preventDefault()
    axios.delete(`http://localhost:8000/api/products/delete/${productId}`)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  const productDetailsPage = (productId) => {
    props.setProductId(productId)
  }

  return (
    <table id="result-table">
      <thead>
        <tr>
          <th>Product List</th>
        </tr>
      </thead>
      <tbody>
        {displayProduct.map((product, index) => {
          return (
            <tr key={index}>
              <td>
                <Link to={"/products/" + product._id} onClick={() => productDetailsPage(product._id)}>
                  {product.title}
                </Link>
                <button id="cancel" onClick={(e) => handleDelete(e, product._id)}> X </button> </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default ProductsList;
