import React, { useContext, useState } from 'react'
import { ctxProducto } from '../../contextos/CarritoContexto'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import Boton from '../../estilosComunes/BotonLogIn'
import { Container, FormularioLogIn, Input, Label, Redirection, Titulo } from './styles'
import { credential } from '../../componentes/ConfigFirebase/Config'

const LogIn = () => {
  const {setState,state} = useContext(ctxProducto);
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const auth = getAuth(credential)
  
  const submit = (event)=>{
    event.preventDefault()
    signInWithEmailAndPassword(auth,email,password)
      .then(log=>{
        setState({
          ...state,
          user:email
        })
        localStorage.setItem('user',email)
      })
      .catch(e=>{
        setState({
          ...state,
          user:null
        })
        alert('No tienes una cuenta, crea una!')
      })
  }
  return (
    <Container>
      <FormularioLogIn>
      <Titulo>Haz login</Titulo>
        <Label>Email</Label>
        <Input type='email' name='email' onChange={event=>setEmail(event.target.value)} />
        <Label>Contraseña</Label>
        <Input type='password' name='password' onChange={event=>setPassword(event.target.value)} />
        <Boton onClick={event=> submit(event)} texto='LogIn' width='50%' style={{marginTop:'3rem'}}/>
      <Redirection to='/register'>No estas registrado? Registrate!</Redirection>

      </FormularioLogIn>

    </Container>
  )
}

export default LogIn