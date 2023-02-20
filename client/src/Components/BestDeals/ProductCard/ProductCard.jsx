import React from 'react'
import './ProductCard.css'


import rating from '../../../Icons/ratings.png'

function ProductCard({name, price, image}) {
  
 console.log(image);
  return (
    <div className='ProductCard'>
      <div className="productCard_image">
        <img src={`/ProductImage/${image}.png`} alt="" />
      </div>
      <div className="PC_item_details">
        <span>iPhone 12 With Facetime 128GB Blue 5G Specs</span>
        <div className='PD_price_cont'>
        <div className="PD_price">{price}</div>
        <div className="PD_rating">
          <img src={rating} alt="" />
          <span>(12)</span>
        </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard