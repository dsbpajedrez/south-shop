import React from 'react'
import { IMGShoppingCart, NumeroItems } from '../Navbar/styles'
import shoppingCart from '../../assets/icon_shopping_cart.svg'
import shoppingCartNotification from '../../assets/icon_shopping_cart_notification.svg'

const CartWidget = ({state,setMenu,menu}) => {
  const cartFromLocal = JSON.parse(localStorage.getItem('cart'))
  return (
    <>
    {cartFromLocal.length>0 ?(
        <>
        <IMGShoppingCart src={shoppingCartNotification}onClick={()=>setMenu(!menu)}/>
        <NumeroItems>{cartFromLocal.length}</NumeroItems>
        </>
      ) 
      : <IMGShoppingCart src={shoppingCart} onClick={()=>setMenu(!menu)}/>
     }
    </>
  )
}

export default CartWidget