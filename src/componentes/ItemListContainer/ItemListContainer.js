import React, {useState, useEffect, cloneElement} from 'react'
import ItemList from '../ItemList/ItemList'
import { Titulo } from './styles'
import useLlamadoAPI from '../../hooks/useLlamadoAPI'
import { useParams } from 'react-router-dom'
import {getFirestore, getDocs,doc,collection} from 'firebase/firestore'


const ItemListContainer = ({ answer}) => { 
  const {id} = useParams()
  const [category,setCategory] = useState()
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
  useEffect(()=>{  
      if(answer == undefined){
        fetch(`https://api.escuelajs.co/api/v1/categories/${id}/products?limit=21&offset=0`)
                .then(respuesta => respuesta.json())
                .then(data=>{
                  categoryTitle()                
                  setCategory(data)
                }) 

      }else{
       categoryTitle()
      }                  
  },[id])
  useEffect(()=>{
    const db = getFirestore()
    const docRef= collection(db,'productos')
    getDocs(docRef)
      .then((snapshot)=>{
      
        const data=snapshot.docs.map(item=>({
          id: item.id,
          data: item.data()
        }))   
        console.log(data);
      }).catch(e=>console.log(e))
  },[])

  return (
    <div>
      <Titulo>{type}</Titulo>
      <ItemList products={answer || category}/>
    </div>
  )
}

export default ItemListContainer