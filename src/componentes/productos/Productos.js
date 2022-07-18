import React from 'react'
import Producto from '../Producto/Producto'
import { Contenedorproductos } from './styles'

const Productos = ({products}) => {
  return (
    <Contenedorproductos>
        {products?.length>0 && products?.map(item=> 
        <Producto        
        key={item.id}
        title={item.title}
        price={item.price}
        images={item.images}
        id={item.id}
        />
        )}
    </Contenedorproductos>
  )
}

export default Productos