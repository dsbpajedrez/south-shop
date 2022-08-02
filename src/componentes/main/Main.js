import React from 'react'
import { Container } from './styles'
import { Routes, Route} from 'react-router-dom'
import Register from '../../pages/Register/Register'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import LogIn from '../../pages/Login/LogIn'
import Carrito from '../Carrito/Carrito'
import NotFound from '../NotFound/NotFound'
import Category from '../Category/Category'
import ItemListContainer from '../ItemListContainer/ItemListContainer'


const Main = () => {
  return (
    <Container>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/login' element={<LogIn/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/detail/:id' element={<ItemDetailContainer/>}/>
          <Route path='/category/:id' element={<Category/>}/>
          <Route path='/carrito' element={<Carrito/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
    </Container>
  )
}

export default Main