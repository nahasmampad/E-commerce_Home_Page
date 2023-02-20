import React from 'react'
import './Menubar.css'
import arrow from '../../Icons/arrow.png'

function Menubar() {
  return (
    <div className='Menubar'>
        <div className="menubar_allCate">
            <span>All Categories</span>
            <img src={arrow} alt="" />
        </div>
        <div className='menubar_menu_items'>
        <span>Books</span>
        <span>Electronics</span>
        <span>real estate</span>
        <span>Cars-bikes</span>
        <span>Dorm-furniture</span>
        <span>Men</span>
        <span>Women</span>
        <span>Music</span>
        <span>hobbies Games</span>
        <span>toys</span>
        <span>Kids</span>
        </div>
    </div>
  )
}

export default Menubar