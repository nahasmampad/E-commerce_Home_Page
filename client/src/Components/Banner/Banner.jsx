import React from "react";
import banner from '../../Icons/Banner.png'
import slider from '../../Icons/dotSlider.png'
import "./Banner.css";

function Banner() {
  return (
    <>
    <div className="Banner">
      <div className="banner_image">
        <img src={banner} alt="" />
        <div className="banner_text">
        <   >
          From students to senior citizens this web portal of
          <br/><b>"Products and
          Classifieds”</b><br/> provides it all
        </>
        </div>
      </div>
    </div>
    <div className="banner_slider">
        <img src={slider} alt="" />
    </div>
    </>
  );
}

export default Banner;
