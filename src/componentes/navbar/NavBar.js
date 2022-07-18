import React, {useState,useContext} from 'react'
import { Container, ItemsNavegacion, Links, Logo, Navegacion, RightSide } from './styles'
import MenuCarrito from '../MenuCarrito/MenuCarrito'
import { ctxProducto } from '../../contextos/CarritoContexto'
import CartWidget from '../CartWidget/CartWidget'


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
         <CartWidget state={state} setMenu={setMenu} menu={menu}/>          
          {menu && <MenuCarrito/>}          
        </RightSide>
    </Container>
  )
}

export default NavBar