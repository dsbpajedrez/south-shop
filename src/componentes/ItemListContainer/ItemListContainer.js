import React from 'react'
import ItemList from '../ItemList/ItemList'
import { Titulo } from './styles'
import { useParams } from 'react-router-dom'
import CategoriesFireStore from '../fireStoreData/CategoriesFireStore/CategoriesFireStore'
import { categoryTitle } from '../../funciones/categoryTitle'

const ItemListContainer = ({ answer}) => { 
  const {id} = useParams() 
  const  category = CategoriesFireStore(categoryTitle(id))
    
  return (
    <div>
      <Titulo>{id==undefined?'Nuestros productos':categoryTitle(id)}</Titulo>
      <ItemList products={answer || category}/>
    </div>
  )
}

export default ItemListContainer