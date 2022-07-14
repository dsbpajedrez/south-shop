import React, {useState,useContext} from 'react'
import { Container, IMGShoppingCart, ItemsNavegacion, Links, Logo, Navegacion, NumeroItems, RightSide } from './styles'
import shoppingCart from '../../assets/icon_shopping_cart.svg'
import shoppingCartNotification from '../../assets/icon_shopping_cart_notification.svg'
import MenuCarrito from '../menuCarrito/MenuCarrito'
import { ctxProducto } from '../../contextos/CarritoContexto'


const NavBar = () => {
  const {state} =useContext(ctxProducto)
  const [menu, setMenu]= useState(false)
  return (
    <Container>
        <Logo src='https://pbs.twimg.com/profile_images/573510708454813696/y-N-508i_400x400.png'/>
        <Navegacion>
          <ItemsNavegacion><Links to='/'>Home</Links></ItemsNavegacion>
          <ItemsNavegacion><Links to='/'>Productos</Links></ItemsNavegacion>
          <ItemsNavegacion><Links to='/'>Contacto</Links></ItemsNavegacion>
          <ItemsNavegacion><Links to='/'>Términos y condiciones</Links></ItemsNavegacion>
        </Navegacion>
        <RightSide >
          <p>Email</p>
          {state.cart.length>0 ?(
            <>
            <IMGShoppingCart src={shoppingCartNotification}onClick={()=>setMenu(!menu)}/>
            <NumeroItems>{state.cart.length}</NumeroItems>
            </>
          ) 
          : <IMGShoppingCart src={shoppingCart} onClick={()=>setMenu(!menu)}/>
         }
          
          {menu && <MenuCarrito/>}
          
        </RightSide>
    </Container>
  )
}

export default NavBar