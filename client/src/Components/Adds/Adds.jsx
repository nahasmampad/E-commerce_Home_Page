import './Adds.css'
import AddsCard from './AddsCard'
import add1 from '../../Icons/banner (1).png'
import add2 from '../../Icons/banner (2).png'
import add3 from '../../Icons/banner (3).png'
import add4 from '../../Icons/banner (4).png'

function Adds() {
    const text1= {
        first:"Explore",
        second:"classifieds",
        caption: "Over 5000 + Products"

    }
    const text2= {
        first:"Add",
        second:"classifieds",
        caption: "ads, event ads service requests etc"
        
    }
    const text3= {
        first:"Explore",
        second:"Products",
        caption: "Over 25000 + Products"
        
    }
    const text4= {
        first:"Partner",
        second:"With Us",
        caption: "Sell your products"

    }
  return (
    <div className='Adds'>
        <AddsCard image={add2} text={text1}/>
        <AddsCard image={add1} text={text2}/>
        <AddsCard image={add3} text={text3}/>
        <AddsCard image={add4} text={text4}/>
        
    </div>
  )
}

export default Adds