import React from 'react'
import { Container } from './styles'

import { Routes, Route} from 'react-router-dom'
import LogIn from '../../pages/login/LogIn'
import Home from '../../pages/home/Home'
import Register from '../../pages/register/Register'
import DetalleProducto from '../detalleProducto/DetalleProducto'

const Main = () => {
  return (
    <Container>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<LogIn/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/detail/:id' element={<DetalleProducto/>}/>
        </Routes>
    </Container>
  )
}

export default Main