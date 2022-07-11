import React from 'react'
import Producto from '../producto/Producto'
import { Contenedorproductos } from './styles'

const Productos = ({products}) => {
  return (
    <Contenedorproductos>
        {products?.length>0 && products?.map(item=> 
        <Producto 
        title={item.title}
        price={item.price}
        images={item.images}
        />
        )}
    </Contenedorproductos>
  )
}

export default Productos