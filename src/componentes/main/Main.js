import React from 'react'
import { Container } from './styles'
import { Routes, Route} from 'react-router-dom'
import Home from '../../pages/Home/Home'
import Register from '../../pages/Register/Register'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import LogIn from '../../pages/Login/LogIn'
import Carrito from '../Carrito/Carrito'
import NotFound from '../NotFound/NotFound'
const Main = () => {
  return (
    <Container>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<LogIn/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/detail/:id' element={<ItemDetailContainer/>}/>
          <Route path='/carrito' element={<Carrito/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
    </Container>
  )
}

export default Main