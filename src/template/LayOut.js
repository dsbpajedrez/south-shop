import React from 'react'
import { Container } from './styles'
import NavBar from '../componentes/navbar/NavBar';
import Footer from '../componentes/footer/Footer'

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