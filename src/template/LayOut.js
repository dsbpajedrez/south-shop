import React from 'react'
import { Container } from './styles'
import NavBar from '../componentes/Navbar/NavBar';
import Footer from '../componentes/Footer/Footer'

const LayOut = ({children}) => {
  return (
    <Container> 
      <NavBar/>
        {children}
      <Footer/>
    </Container>
  )
}

export default LayOut