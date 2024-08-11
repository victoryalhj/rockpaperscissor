import React from 'react'

const Box = (props) => {
  return (
    <div className="box">
      <h1>{props.title}</h1>
      <img className="item-img" src="https://breeze-media.vega.co.in/media/catalog/product/cache/1ef41c8834aa6b772f4686b0f4051c34/1/_/1_41_5.jpg"/>
      <h2>WIN</h2>  
    </div>
  )
}

export default Box
