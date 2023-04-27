import React from 'react'
import { IMGShoppingCart, NumeroItems } from '../navbar/styles'
import shoppingCart from '../../assets/icon_shopping_cart.svg'
import shoppingCartNotification from '../../assets/icon_shopping_cart_notification.svg'

const CartWidget = ({state,setMenu,menu}) => {
  return (
    <>
    {state?.cart?.length>0 ?(
        <>
        <IMGShoppingCart src={shoppingCartNotification}onClick={()=>setMenu(!menu)}/>
        <NumeroItems>{state?.cart?.length}</NumeroItems>
        </>
      ) 
      : <IMGShoppingCart src={shoppingCart} onClick={()=>setMenu(!menu)}/>
     }
    </>
  )
}

export default CartWidget