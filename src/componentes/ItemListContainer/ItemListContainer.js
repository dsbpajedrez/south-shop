import React, {useEffect, useState} from 'react'
import ItemList from '../ItemList/ItemList'
import { Titulo } from './styles'
import { useParams } from 'react-router-dom'
import CategoriesFireStore from '../fireStoreData/CategoriesFireStore/CategoriesFireStore'

const ItemListContainer = ({ answer}) => { 
  const {id} = useParams()  
  const categoryTitle =()=>{
    switch (id) {
      case '1':       
        return 'ropa'      
      case '2':       
        return 'electronico'      
      case '3':      
        return 'muebles'      
      case '4':       
        return 'zapatos'      
        case '5':       
          return 'otros'        
      default:       
        return 'zapatos'
    }
  }
    const  category = CategoriesFireStore(categoryTitle())
    
  return (
    <div>
      <Titulo>{categoryTitle()}</Titulo>
      <ItemList products={answer || category}/>
    </div>
  )
}

export default ItemListContainer