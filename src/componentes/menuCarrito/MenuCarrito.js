import React,{useContext} from 'react'
import ItemsProducto from '../ItemProductos/ItemsProducto'
import {  ItemProducto, ListaProductos } from './styles'
import { ctxProducto } from '../../contextos/CarritoContexto'
import { reducerArray } from '../../funciones/reducerArray'
const MenuCarrito = () => {
  const {state} = useContext(ctxProducto)
  return (
    <ListaProductos>
         <ItemProducto>
            <p>Item</p>
            <p>Producto</p>
        </ItemProducto>
        {state.cart.length>0 && state.cart.map(producto=>
          <ItemsProducto product={producto} />
          )}
        <p>Total: ${state.cart.length>0 ? reducerArray(state.cart.map(producto=> producto.price)):'0'}</p>
    </ListaProductos>
  )
}

export default MenuCarrito