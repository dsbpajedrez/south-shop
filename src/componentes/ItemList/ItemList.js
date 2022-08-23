import React from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { Contenedorproductos } from './styles'

const ItemList = ({products}) => {

  return (
    <Contenedorproductos>
        {products?.length>0 && products?.map(item=> {
    
          return(<ItemDetail        
          key={item?.id}
          title={item?.title}
          price={item?.price}
          image={item?.image}
          id={item?.id}
          />)
})}
    </Contenedorproductos>
  )
}
export default ItemList