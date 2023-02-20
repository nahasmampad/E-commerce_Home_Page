import ProductCard from "./ProducCard/ProductCard";
import arrow from "../../Icons/arrow.png";
import { Classified } from "../../ProductDetails/Product";
import "./Style.css";

function ClassifideProduct() {
  return (
    <div className="Classified">
      <div className="cla_left">
        <span>Classified Products on the week</span>
        <div className="cla_arrow">
          <div className="cla_arrow_circle">
            <img className="cla_arrow_left" src={arrow} alt="" />
          </div>
          <div className="cla_arrow_circle">
            <img className="cla_arrow_right" src={arrow} alt="" />
          </div>
        </div>
        <button className="btn Cla_btn">
          Explore <img className="btn_arrow_right" src={arrow} alt="" />
        </button>
      </div>
      <div className="cla_right">
        {Classified.map((item, i) => (
          <ProductCard key={i} product={item}/>
        ))}
      </div>
    </div>
  );
}

export default ClassifideProduct;
