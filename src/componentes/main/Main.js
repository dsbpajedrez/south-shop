import React from 'react'
import { Container } from './styles'
import { Routes, Route} from 'react-router-dom'
import Register from '../../pages/Register/Register'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import LogIn from '../../pages/Login/LogIn'
import Carrito from '../Carrito/Carrito'
import NotFound from '../NotFound/NotFound'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import useLlamadoAPI from '../../hooks/useLlamadoAPI'
import SideBar from '../Sidebar/SideBar'
import LinksSidebar from '../LinksSidebar/LinksSidebar'
const API_PRODUCTS ='https://api.escuelajs.co/api/v1/products'


const Main = () => {
  let answer=useLlamadoAPI(API_PRODUCTS)
  return (
    <>
       <SideBar>
        <LinksSidebar/>
      </SideBar>
    <Container>
        <Routes>
          <Route path='/' element={<ItemListContainer answer={answer}/>}/>      
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route path='/category/:id' element={<ItemListContainer/>}/>
          <Route path='/carrito' element={<Carrito/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
    </Container>
    </>
  )
}

export default Main