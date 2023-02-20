import React from 'react'
import arrow from '../../Icons/arrow.png'
import './BackToTop.css'

function BackTotop() {
  return (
    <div className='BackTotop'>
        <div className='BackTotop_container'>
            <span>Back to Top</span>
        <img src={arrow} alt="" />
        </div>
    </div>
  )
}

export default BackTotop