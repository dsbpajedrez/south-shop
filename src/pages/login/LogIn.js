import React from 'react'
import Boton from '../../estilosComunes/BotonLogIn'
import { Container, FormularioLogIn, Input, Label, Titulo } from './styles'

const LogIn = () => {
  return (
    <Container>
      <FormularioLogIn>
      <Titulo>Haz login</Titulo>
        <Label>Email</Label>
        <Input type='email' name='email' />
        <Label>Contraseña</Label>
        <Input type='password' name='password' />
        <Boton texto='LogIn' width='100%' style={{marginTop:'3rem'}}/>
      </FormularioLogIn>
    </Container>
  )
}

export default LogIn