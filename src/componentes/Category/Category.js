import  React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import GetOneCategory from '../../hooks/useApiCategory'
import ItemList from '../ItemList/ItemList'
import { Titulo } from './styles'

const Category = () => {

  const {id} = useParams()
  const [category,setCategory] = useState()
  const [type,setType]=useState()
  useEffect(()=>{
      fetch(`https://api.escuelajs.co/api/v1/categories/${id}/products?limit=21&offset=0`)
              .then(respuesta => respuesta.json())
              .then(data=>{
                switch (id) {
                  case '1':
                    setType('Ropa')
                    break;
                  case '2':
                    setType('Electronicos')
                    break;
                  case '3':
                    setType('Muebles')
                    break;
                  case '4':
                    setType('Zapatos')
                    break;
                  default:
                    setType('Otros' )
                    break;
              }
                setCategory(data)
              })              
                
  },[id])

  return (
    <div>
    <Titulo>{type}</Titulo>
    <ItemList products={category}/>
  </div>
  )
}

export default Category