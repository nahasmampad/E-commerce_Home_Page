import logo from "../../Icons/logo-6 1.png";
import arrowDown from "../../Icons/arrow.png";
import search from "../../Icons/Vector.png";
import heart from "../../Icons/heart.svg";
import basket from "../../Icons/basket.svg";
import person from "../../Icons/person.svg";
import Cookies from "js-cookie";
import "./style.css";
import { useEffect, useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'

function Navbar({count}) {
 
  
 
  return (
    <div className="Navbar">
      <div className="navbar_left">
        <div className="navbar_logo">
          <img src={logo} alt="" />
        </div>
        <div className="navebar_classifide">
          <span>Classifieds</span>
          <img src={arrowDown} alt="" />
        </div>
        <div className="navebar_serach">
          <input type="text" placeholder="Search here..." />
          <img src={search} alt="" />
        </div>
      </div>
      <div className="navbar_icons">
        <img src={heart} alt="" />
        <Link to="/cart"><div className="cart">
          <img src={basket} alt="" />
          <div className="cart_count">{count}</div>
        </div></Link>
        <img src={person} alt="" />
      </div>
      <button className="btn navbar_btn">Classifieds</button>
    </div>
  );
}

export default Navbar;
