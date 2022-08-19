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
  const [email,setEmail]=useState(null)
  const [password,setPassword]=useState(null)
  const [name,setName] = useState(null)

  const submit = async(event)=>{
    event.preventDefault()
    try{
      const infoUser= await createUserWithEmailAndPassword(auth,email,password, name)
      setState({
        ...state,
        user:email
      })

    }catch(e){
      alert(`Detalles del error: ${e}`);
      setState({
        ...state,
        user:null
      })
    }
  }
  return (
    <Container>
      <FormularioLogIn>
        <Titulo>Registrate hoy!</Titulo>
        <Label>Nombre</Label>
        <Input type='text' name='nombre' onChange={event=>setName(event.target.value)}/>
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