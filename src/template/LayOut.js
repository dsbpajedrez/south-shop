import React from 'react'
import { Container } from './styles'
import NavBar from '../componentes/navbar/NavBar';
import Footer from '../componentes/footer/Footer'
import SideBar from '../componentes/sidebar/SideBar'
import LinksSidebar from '../componentes/linksSidebar/LinksSidebar';

const LayOut = ({children}) => {
  return (
    <Container>           
      <NavBar/>
        {children}
      <SideBar>
        <LinksSidebar/>
      </SideBar>
      <Footer/>
    </Container>
  )
}

export default LayOut