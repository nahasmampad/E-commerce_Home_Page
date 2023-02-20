import React, { useEffect, useState } from 'react'
import Headder from '../../Components/Headder/Headder'
import HoteSale from '../../Components/HoteSale/HoteSale'
import Cookies from "js-cookie";
import axios from 'axios'

function Cart() {
  const user = JSON.parse(Cookies.get("user"));
  const [updatedUser, setUpdatedUser] = useState({});
  const [cartItem, setCartItem] = useState([]);
  const getUser = async () => {
    const { data } = await axios.get(
      `http://localhost:8000/getUser/${user.email}`
    );
    
    setUpdatedUser(data)
    setCartItem(data?.cart)
    return data
  };

  useEffect(()=>{
    getUser()
  },[])
  return (
    <div className='Cart'>
      <Headder/>
      <HoteSale getUser={getUser} updatedUser={updatedUser.cart} cartItem={cartItem} title={"Your Cart"}/>
    </div>
  )
}

export default Cart