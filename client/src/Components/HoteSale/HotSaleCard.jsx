import axios from "axios";
import React, { useEffect, useState } from "react";
import star from "../../Icons/star.png";

function HotSaleCard({ user, product, getUser, updatedUser }) {
  const [text, setText] = useState("Add to cart");

  const test = () => {
    const filterData = updatedUser.filter((item) => item.id == product.id);

    if (filterData.length > 0) {
      setText("Remove fromCart");
    } else {
      setText("Add to cart");
    }
    return text;
  };

  const updateCart = async (product) => {
    const { data } = await axios.post(`http://localhost:8000/updateCart`, {
      email: user.email,
      cart: product,
    });
    getUser();
    if (data.message === "Cart removed") {
      setText("Remove From Cart");
    } else {
      setText("Add to Cart");
    }
  };

  useEffect(() => {
    test();
  }, [updatedUser]);
  return (
    <div className="HotSaleCard">
      <div className="HotSale_top">
        <div className="HotSale_img_contsiner">
          <img src={`/ProductImage/${product.image}.png`} alt="" />
          {product.off && <div className="pro_tag blue">{product.off}</div>}
        </div>
        <span>{product.product}</span>
      </div>

      <div className="HotSale_bottum">
        <span>$1,245.33</span>
        <div className="Rec_Rating">
          <div className="Rec_off">$1,300</div>
          <div className="Rec_rating">
            <span className="HS_rating">4.5</span>
            <img src={star} alt="" />
          </div>
        </div>
        <button onClick={() => updateCart(product)} className="btn_addCart">
          {text}
        </button>
      </div>
    </div>
  );
}

export default HotSaleCard;
