import React from 'react'
import Boton from '../../estilosComunes/BotonLogIn'
import { Container, FormularioLogIn, Input, Label, Titulo } from './styles'

const Ragister = () => {
  return (
    <Container>
      <FormularioLogIn>
        <Titulo>Registrate hoy!</Titulo>
        <Label>Nombre</Label>
        <Input type='text' name='nombre'/>
        <Label>Email</Label>
        <Input type='email' name='email' />
        <Label>Contraseña</Label>
        <Input type='password' name='password' />
        <Boton texto='Ragister' width='50%' style={{marginTop:'3rem'}}/>
      </FormularioLogIn>
    </Container>
  )
}

export default Ragister