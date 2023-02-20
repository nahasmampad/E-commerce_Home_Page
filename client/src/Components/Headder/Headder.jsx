import phone from '../../Icons/phone.png'
import envelope from '../../Icons/envelope.png'
import location from '../../Icons/Vector-1.png'
import arrowDown from '../../Icons/Arrowdown.png'
import "./Headder.css";

function Headder() {
  return (
    <div className="Headder">
      <div className="headder_left">
        <div className="header_item_container">
          <img src={phone} alt="" />
          <span>+221 33 66 22</span>
        </div>
        <div className="header_item_container">
          <img src={envelope} alt="" />
          <span>support@elextra.io</span>
        </div>
      </div>
      <div className="headder_right">
        <div className="header_item_container">
        <img src={location} alt="" />
          <span>Locations</span>
        </div>
        <div className="cross_line"></div>
        <div className="headder_currency arrow_down">
          <span>$ Dollar (US)</span>
          <img src={arrowDown} alt="" />
        </div>

        <div className="headder_language arrow_down">
          <span>EN</span>
          <img src={arrowDown} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Headder;
