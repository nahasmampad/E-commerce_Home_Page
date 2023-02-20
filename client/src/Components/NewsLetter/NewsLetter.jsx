import React from "react";
import letter from '../../Icons/letter.png'
import './NewsLetter.css'

function NewsLetter() {
  return (
    <div className="NewsLetter">
      <div className="NewsLetter_left">
        <img src={letter} alt="" />
        <div className="NL_left_text">
          <span>Sign Up for Newsletter</span>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
        </div>

      </div>
      <div className="NewsLetter_right">
        <div className="NL_input_container">
            <input type="text" placeholder="Enter your email here" />
            <button className="subscribe_btn">SUBSCRIBE</button>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
