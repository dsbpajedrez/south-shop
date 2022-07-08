import React from 'react'
import { Container } from './styles'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LogIn from '../../pages/login/LogIn'
import Home from '../../pages/home/Home'

const Main = () => {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<LogIn/>}/>
        </Routes>
      </BrowserRouter>
    </Container>
  )
}

export default Main