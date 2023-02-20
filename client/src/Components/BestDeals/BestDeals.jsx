import React from 'react'
import ProductCard from './ProductCard/ProductCard'
import {bestDeals} from '../../ProductDetails/Product'
import './Style.css'


function BestDeals() {
  return (
    <div className='BestDeals'>
        <div className="BD_title">
            <span>Best Deals</span>
            <span>View all</span>
            
        </div>
        <div className="BD_product_card">
            {
                bestDeals.map((item,i)=>(
                    <ProductCard key={i} name={item.name} price={item.price} image={item.Image} />
                ))
            }
           
        </div>
    </div>
  )
}

export default BestDeals