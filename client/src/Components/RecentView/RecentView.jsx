import React from 'react'
import './RecentView.css'
import arrow from '../../Icons/arrow.png'
import ProductCard from '../BestDeals/ProductCard/ProductCard'
import {bestDeals} from '../../ProductDetails/Product'

function RecentView() {
  return (
    <div className='RecentView'>
        <div className="ReView_title">
            <span>Recently viewed</span>
            <div className="ReView_arrow">
                <img src={arrow} alt="" />
                <img src={arrow} alt="" />
            </div>
        </div>

        <div className="Re_view_card">
            {
                bestDeals.slice(0,5).map((item, i)=>(
                    <ProductCard  key={i} name={item.name} price={item.price} image={item.Image}/>
                ))
            }
        </div>
    </div>
  )
}

export default RecentView