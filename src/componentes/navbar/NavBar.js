import React, {useState,useContext} from 'react'
import { Container, ItemsNavegacion, Links, Logo, MenuPhoneContainer, Navegacion, ParrafoUsuario, RightSide } from './styles'
import MenuCarrito from '../MenuCarrito/MenuCarrito'
import CartWidget from '../CartWidget/CartWidget'

import { ctxProducto } from '../../contextos/CarritoContexto'
import MenuPhone from '../MenuPhone/MenuPhone'




const NavBar = () => {
  const {state} =useContext(ctxProducto)
  const [menu, setMenu]= useState(false)
  const [menuPhone, setMenuPhone]= useState(false)

  return (
    <Container>
      <Links to='/'>
        <Logo src='https://pbs.twimg.com/profile_images/573510708454813696/y-N-508i_400x400.png'/>
      </Links>
      <MenuPhoneContainer onClick={()=>setMenuPhone(!menuPhone)}>
        <Logo src='https://pbs.twimg.com/profile_images/573510708454813696/y-N-508i_400x400.png'/>
      </MenuPhoneContainer>
      {menuPhone && <MenuPhone/>}
        <Navegacion>
          <ItemsNavegacion><Links to='/'>Home</Links></ItemsNavegacion>
          <ItemsNavegacion><Links to='/'>Productos</Links></ItemsNavegacion>
          <ItemsNavegacion><Links to='/'>Contacto</Links></ItemsNavegacion>
          <ItemsNavegacion><Links to='/'>Términos y condiciones</Links></ItemsNavegacion>
        </Navegacion>
        <RightSide >
          <ParrafoUsuario>{state?.user? state.user:'Invitado'}</ParrafoUsuario>
          {state?.user?<CartWidget state={state} setMenu={setMenu} menu={menu}/> :<></>}
                  
          {menu && <MenuCarrito/>}   

                
        </RightSide>
    </Container>
  )
}

export default NavBar