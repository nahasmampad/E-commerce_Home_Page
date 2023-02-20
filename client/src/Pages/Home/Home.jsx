import React, { useEffect, useState } from 'react'
import Banner from '../../Components/Banner/Banner'
import BestDeals from '../../Components/BestDeals/BestDeals'
import Headder from '../../Components/Headder/Headder'
import Menubar from '../../Components/Menubar.jsx/Menubar'
import Navbar from '../../Components/Navbar/Navbar'
import ClassifideProduct from '../../Components/ClassifiedProduct/ClassifideProduct'
import Recomented from '../../Components/Recomented/Recomented'
import FlashSale from '../../Components/FlashSale/FlashSale'
import HoteSale from '../../Components/HoteSale/HoteSale'
import Adds from '../../Components/Adds/Adds'
import RecentView from '../../Components/RecentView/RecentView'
import BackTotop from '../../Components/BacktoTop/BackTotop'
import NewsLetter from '../../Components/NewsLetter/NewsLetter'
import Footer from '../../Components/Footer/Footer'
import Cookies from "js-cookie";
import axios from 'axios'
import {cartItem} from '../../ProductDetails/Product'

function Home() {
  const [count, setCount] = useState(0);
  const [updatedUser, setUpdatedUser] = useState([]);
  
  const user = JSON.parse(Cookies.get("user"));
  const getUser = async () => {
    const { data } = await axios.get(
      `http://localhost:8000/getUser/${user.email}`
    );
    setCount(data?.cart.length);
    setUpdatedUser(data?.cart)
    return data
  };

  useEffect(() => {
    getUser();
  }, []);
  
  return (
    <div>
        <Headder/>
        <Navbar getUser={getUser} count={count}/>
        <Menubar/>
        <Banner/>
        <BestDeals/>
        <ClassifideProduct/>
        <Recomented/>
        <FlashSale/>
        <HoteSale user={user} getUser={getUser} updatedUser={updatedUser} cartItem={cartItem}/>
        <Adds/>
        <RecentView/>
        <BackTotop/>
        <NewsLetter/>
        
    </div>
  )
}

export default Home