import "./ProductCard.css";
import location from '../../../Icons/Vector-1.png'

function ProductCard({product}) {
  return (
    <div className="Cla_ProCard">
      <div className="Cla_ProCard_imageContainer">
        <img src={`ProductImage/${product.Image}.png`}alt="" />
        {
          product.US && <div className="pro_tag">Urgent Selling</div>
        }
      </div>
      <div className="Cla_pro_deatils">
        <span>{product.name}</span>
        <div className="Cla-pro_bottum">
          <div className="Cla_pro_price">$300.98</div>
          <div className="Cla_pro_location">
            <img src={location} alt="" />
            <span>Cape Hadstone</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
