import React from 'react'
import { Container } from './styles'
import { Routes, Route} from 'react-router-dom'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import Carrito from '../Carrito/Carrito'
import NotFound from '../NotFound/NotFound'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import SideBar from '../Sidebar/SideBar'
import LinksSidebar from '../LinksSidebar/LinksSidebar'
import ItemDetailFireStore from '../fireStoreData/ProducsFireStore/ProductsFireStore'



const Main = () => {
  const answer = ItemDetailFireStore('productos')
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