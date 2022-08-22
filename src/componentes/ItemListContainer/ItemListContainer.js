import React, {useState} from 'react'
import ItemList from '../ItemList/ItemList'
import { Titulo } from './styles'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ answer}) => { 
  const {id} = useParams()
  
  const [category,setCategory] = useState()
  const [data, setData] = useState([])
  const [type,setType]=useState()
  const categoryTitle =()=>{
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
        case '5':
          setType('Otros')
          break;
      default:
        setType('Nuestros productos' )
        break;
  }
  }

  return (
    <div>
      <Titulo>{type}</Titulo>
      <ItemList products={answer}/>
    </div>
  )
}

export default ItemListContainer