import React from 'react'

import arrow from "../../Icons/arrow.png";
import HotSaleCard from './HotSaleCard';
import './HoteSale.css'



function HoteSale({user,setCount,getUser,updatedUser,cartItem, title}) {
  return (
    <div className='HotSale'>
        <div className="hotSale_title">{title ? title : "HotSale"} </div>
        <div className="hotSale_continer">
        <div className="cla_arrow_circle">
          <img className="cla_arrow_left" src={arrow} alt="" />
        </div>
        <div className="hotSale_card">
            {
              cartItem.map((item, i)=>(
                <HotSaleCard key={i} user={user} product={item} getUser={getUser} updatedUser={updatedUser} />
              ))
            }
             
        </div>
        <div className="cla_arrow_circle">
          <img className="cla_arrow_right" src={arrow} alt="" />
        </div>
        </div>
    </div>
  )
}

export default HoteSale