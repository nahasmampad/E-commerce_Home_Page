import React from "react";
import ins from "../../Icons/flash (1).png";

function FlashsaleProduct({image, text}) {
  return (
    <div className="FlashsaleProduct">
      <div className="FP_image_container">
        <img src={image} alt="" />
      </div>
      <div className="FP_content">
        <div className="FP_pro_name">
          <span>{text}</span>
        </div>
        <div className="FP_pro_prize">
          <div className="FP_prize">
            <span>$33.3</span>
            <span>24 left</span>
          </div>
          <div className="status_bar">
            <div className="status_bar_col"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlashsaleProduct;
