import React from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { Contenedorproductos } from './styles'

const ItemList = ({products}) => {
 
  return (
    <Contenedorproductos>
        {products?.docs?.length>0 && products?.docs?.map(item=> {
    
          return(<ItemDetail        
          key={item?.data()?.id}
          title={item?.data()?.title}
          price={item?.data()?.price}
          image={item?.data()?.image}
          id={item?.id}
          />)
})}
    </Contenedorproductos>
  )
}
export default ItemList