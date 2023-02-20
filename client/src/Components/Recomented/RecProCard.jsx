import star from "../../Icons/star.png";

function RecProCard({product}) {
    
  return (
    <div>
         <div className="Rec_ProCard">
        <div className="Rec_ProCard_imageContainer">
          <img src={`ProductImage/${product.Image}.png`} alt="" />
          {product.off && <div className="Rec_pro_tag">{product.off}</div>}
        </div>
        <div className="Rec_pro_deatils">
          <span>{product.name}</span>
          <div className="Rec_price_det">
            <span>$1,245.33</span>
            <div className="Rec_Rating">
              <div className="Rec_off">$1,300</div>
              <div className="Rec_rating">
                <span>4.5</span>
                <img src={star} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecProCard