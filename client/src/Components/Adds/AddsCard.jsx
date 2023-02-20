import React from 'react'
import banner from '../../Icons/banner (2).png'
import arrow from '../../Icons/arrow.png'

function AddsCard({image, text}) {
  return (
    <div className='AddsCard'>
        <img className='Add_banner_img' src={image} alt="" />
        <div className="add_caption">
            <span>{text.first}</span>
            <span>{text.second}</span>
        </div>
        <div className="Add_dis">
            <span>{text.caption}</span>
            <div className="adds_circle_arrow">
                <img src={arrow} alt="" />
            </div>
        </div>
    </div>
  )
}

export default AddsCard