import React, {useContext, useState} from 'react'
import 'firebase/auth'
import { createUserWithEmailAndPassword,getAuth } from 'firebase/auth'
import Boton from '../../estilosComunes/BotonLogIn'
import { Container, FormularioLogIn, Input, Label, Redirection, Titulo } from './styles'
import { credential } from '../../componentes/ConfigFirebase/Config'
import { ctxProducto } from '../../contextos/CarritoContexto'

const Ragister = () => {
  const {setState,state} = useContext(ctxProducto)
  const auth= getAuth(credential)
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  const submit = async(event)=>{
    event.preventDefault()
    try{
      const infoUser= createUserWithEmailAndPassword(auth,email,password)
      setState({
        ...state,
        user:email
      })

    }catch(e){
      console.log(`Detalles del error: ${e}`);
    }
  }
  return (
    <Container>
      <FormularioLogIn>
        <Titulo>Registrate hoy!</Titulo>
        <Label>Nombre</Label>
        <Input type='text' name='nombre'/>
        <Label>Email</Label>
        <Input type='email' name='email'onChange={event=> setEmail(event.target.value)} />
        <Label>Contraseña</Label>
        <Input type='password' name='password' onChange={event=> setPassword(event.target.value)} />
        <Boton onClick={event=>submit(event)} texto='Ragister' width='50%' style={{marginTop:'3rem'}}/>
        <Redirection to='/'>Ya estas registrado? Haz login!</Redirection>
      </FormularioLogIn>
    </Container>
  )
}

export default Ragister