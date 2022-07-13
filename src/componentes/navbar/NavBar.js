import React, {useState} from 'react'
import { Container, IMGShoppingCart, ItemsNavegacion, Links, Logo, Navegacion, RightSide } from './styles'
import shoppingCart from '../../assets/icon_shopping_cart.svg'
import MenuCarrito from '../menuCarrito/MenuCarrito'


const NavBar = () => {
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
        <RightSide onClick={()=>setMenu(!menu)}>
          <p>Email</p>
          <IMGShoppingCart src={shoppingCart}/>
          {menu && <MenuCarrito/>}
          
        </RightSide>
    </Container>
  )
}

export default NavBar