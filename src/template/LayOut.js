import React from 'react'
import { Container } from './styles'
import Header from '../componentes/header/Header';
import Footer from '../componentes/footer/Footer'
import SideBar from '../componentes/sidebar/SideBar'

const LayOut = ({children}) => {
  return (
    <Container>           
      <Header/>
        {children}
      <SideBar/>
      <Footer/>
    </Container>
  )
}

export default LayOut