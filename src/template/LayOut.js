import React from 'react'
import { Container } from './styles'
import NavBar from '../componentes/Navbar/NavBar';
import Footer from '../componentes/Footer/Footer'
import SideBar from '../componentes/Sidebar/SideBar'
import LinksSidebar from '../componentes/LinksSidebar/LinksSidebar';

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