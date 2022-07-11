import React from 'react'
import { Container } from './styles'

import { Routes, Route} from 'react-router-dom'
import LogIn from '../../pages/login/LogIn'
import Home from '../../pages/home/Home'
import Register from '../../pages/register/Register'

const Main = () => {
  return (
    <Container>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<LogIn/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
    </Container>
  )
}

export default Main