import React from "react";
import "./Recomented.css";
import arrow from "../../Icons/arrow.png";
import RecProCard from "./RecProCard";
import { recomened } from "../../ProductDetails/Product";

function Recomented() {
  const product = {
    US: true,
  };
  return (
    <div className="Recomented">
      <div className="BD_title">
        <span>Best Deals</span>
        <span>View all</span>
      </div>

      <div className="Rec_container">
        <div className="cla_arrow_circle">
          <img className="cla_arrow_left" src={arrow} alt="" />
        </div>
        {/* Card */}

        <div className="Rec_card_continer scrollbar">
          {recomened.map((item, i) => (
            <RecProCard key={i} product={item} />
          ))}
        </div>

        <div className="cla_arrow_circle">
          <img className="cla_arrow_right" src={arrow} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Recomented;
