import './FlashSale.css'
import FlashsaleProduct from './FlashsaleProduct'
import watch from "../../Icons/flash (1).png";
import printer from "../../Icons/flash (2).png";
import slider from '../../Icons/dotSlider.png'

function FlashSale() {
    const text1 = "Casio G-Shock Ana-Digi Quartz World Time 200m Black"
    const text2 = "Canon LBP113w imageCLASS WiFi Laser Printer"
  return (
    <div className='FlashSale' >
        <div className="flashSlae_banner ">
            
                <div className="flashSlae_bg"></div>
            <div className="FS_banner_left">
                <span>Flash Sale</span>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</span>
                <span>05  :  42  :  19  :  54</span>
            </div>
            <div className="FS_banner_right">
                <div className="FS_banner_card">
                <FlashsaleProduct image={watch} text={text1} />
                <FlashsaleProduct image={printer} text={text2}/>
                </div>
                <div className="FS_carosl">
                    <img src={slider} alt="" />
                    <span>View more</span>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default FlashSale