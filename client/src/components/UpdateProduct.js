import React, { useState } from 'react'
import axios from 'axios'
import '../style/style.css'
import { navigate } from "@reach/router";

const UpdateProductForm = (props) => {

  const { existingProduct } = props
  const [title, setTitle] = useState(existingProduct.title)
  const [price, setPrice] = useState(existingProduct.price)
  const [desc, setDesc] = useState(existingProduct.description)


  const onSubmitHandler = (e) => {
    e.preventDefault()

    axios.put('http://localhost:8000/api/products/edit/' + existingProduct._id, {
      title: title,
      price: price,
      description: desc
    })
      .then(res => {
        console.log(res)
        navigate("/products/" + existingProduct._id)
      })
      .catch(err => console.log(err))
  }

  const cancelUpdate = () => {
    navigate("/products/" + existingProduct._id)
  }

  return (
    <div>
      <h3> Edit Product Details </h3>
      <form onSubmit={onSubmitHandler}>
        <div className="outerArea">
          <label className="labelTitle"> Title </label>
          <input className="contentInput" type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
        </div>
        <div className="outerArea">
          <label className="labelTitle"> Price </label>
          <input className="contentInput" type="text" onChange={(e) => setPrice(e.target.value)} value={price} />
        </div>
        <div className="outerArea">
          <label className="labelTitle"> Description </label>
          <input className="contentInput" type="text" onChange={(e) => setDesc(e.target.value)} value={desc} />
        </div>
        <button id="update_button" onClick={cancelUpdate}> Cancel </button>
        <input id="update_button" type="submit" value="Done" />
      </form>
    </div>
  )
}

export default UpdateProductForm;
