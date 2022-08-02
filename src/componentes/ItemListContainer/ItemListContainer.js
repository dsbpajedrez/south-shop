import React from 'react'
import ItemList from '../ItemList/ItemList'
import { Titulo } from './styles'
import useLlamadoAPI from '../../hooks/useLlamadoAPI'
const API_PRODUCTS ='https://api.escuelajs.co/api/v1/products'


const ItemListContainer = () => {
  const answer=useLlamadoAPI(API_PRODUCTS)
  return (
    <div>
      <Titulo>Nuestros Productos</Titulo>
      <ItemList products={answer}/>
    </div>
  )
}

export default ItemListContainer