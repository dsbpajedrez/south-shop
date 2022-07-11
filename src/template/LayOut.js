import React from 'react'
import { Container } from './styles'
import Header from '../componentes/header/Header';
import Footer from '../componentes/footer/Footer'
import SideBar from '../componentes/sidebar/SideBar'
import LinksSidebar from '../componentes/linksSidebar/LinksSidebar';

const LayOut = ({children}) => {
  return (
    <Container>           
      <Header/>
        {children}
      <SideBar>
        <LinksSidebar/>
      </SideBar>
      <Footer/>
    </Container>
  )
}

export default LayOut