import React, { useState } from 'react'
import axios from 'axios'
import '../style/style.css'

const ProductForm = () => {

  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")
  const [desc, setDesc] = useState("")

  const onSubmitHandler = (e) => {
    e.preventDefault()

    axios.post('http://localhost:8000/api/products', {
      title: title,
      price: price,
      description: desc
    })
      .then(res => {
        console.log(res)
        setTitle("")
        setPrice("")
        setDesc("")
      })
      .catch(err => console.log(err))
  }

  return (
    <div>
      <h3> Product Manager </h3>
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
        <input id="create_button" type="submit" value="Create" />
      </form>
    </div>
  )
}

export default ProductForm;
