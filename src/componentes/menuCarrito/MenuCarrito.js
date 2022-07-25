import React,{useContext} from 'react'
import ItemsProducto from '../ItemProductos/ItemsProducto'
import {  BotonCarrito, Bottom, ItemProducto, ListaProductos } from './styles'
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
        <Bottom>
        <p>Total: ${state.cart.length>0 ? reducerArray(state.cart.map(producto=> {
          console.log(producto);
          return producto.price*producto.cantidad
          })):'0'}</p>
          <BotonCarrito to='/carrito' >Ir a carrito</BotonCarrito  >
        </Bottom>
    </ListaProductos>
  )
}

export default MenuCarrito