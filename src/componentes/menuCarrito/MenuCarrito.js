import React,{useContext} from 'react'
import {  BotonCarrito, Bottom, ItemProducto, ListaProductos } from './styles'
import { ctxProducto } from '../../contextos/CarritoContexto'
import { reducerArray } from '../../funciones/reducerArray'
import Cart from '../Cart/Cart'
const MenuCarrito = () => {
  const {state} = useContext(ctxProducto)
 
  return (
    <ListaProductos>
         <ItemProducto>
            <p>Item</p>
            <p>Producto</p>
        </ItemProducto>
        {state?.cart?.length>0 && state?.cart?.map(producto=>
          <Cart product={producto} />
          )}
        <Bottom>
        <p>Total: ${state?.cart?.length>0 ? reducerArray(state?.cart?.map(producto=> {
     
          return Number(producto.price)*producto.cantidad
          })):'0'}</p>
          <BotonCarrito to='/carrito' >Ir a carrito</BotonCarrito  >
        </Bottom>
    </ListaProductos>
  )
}

export default MenuCarrito