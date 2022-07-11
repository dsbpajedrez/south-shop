import React from 'react'
import { Container } from './style'

const SideBar = ({children}) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default SideBar