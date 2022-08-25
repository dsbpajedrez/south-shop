import React from 'react'
import { IMGShoppingCart, NumeroItems } from '../Navbar/styles'
import shoppingCart from '../../assets/icon_shopping_cart.svg'
import shoppingCartNotification from '../../assets/icon_shopping_cart_notification.svg'

const CartWidget = ({state,setMenu,menu}) => {
  const cartFormLocal = JSON.parse(localStorage.getItem('cart'))

  return (
    <>
    {cartFormLocal?.length>0 ?(
        <>
        <IMGShoppingCart src={shoppingCartNotification}onClick={()=>setMenu(!menu)}/>
        <NumeroItems>{cartFormLocal?.length}</NumeroItems>
        </>
      ) 
      : <IMGShoppingCart src={shoppingCart} onClick={()=>setMenu(!menu)}/>
     }
    </>
  )
}

export default CartWidget