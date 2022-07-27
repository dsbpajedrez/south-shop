import React, {useContext, useState} from 'react'
import { ctxProducto } from '../../contextos/CarritoContexto';
import { reducerArray } from '../../funciones/reducerArray';
import ItemsProducto from '../ItemProductos/ItemsProducto';
import { BotonCarrito, Bottom, ItemProducto, ListaProductos, Titulo, Total } from './styles';

const Carrito = () => {
    const {state} = useContext(ctxProducto)
    const precioTotal = state.cart.length>0? reducerArray(state.cart.map(producto=> {     
        return producto.price*producto.cantidad
        })):'0'
  return (
    <ListaProductos>
    <ItemProducto>
       <Titulo>Item</Titulo>
       <Titulo>Producto</Titulo>
   </ItemProducto>
   {state.cart.length>0 && state.cart.map(producto=>
     <ItemsProducto product={producto} />
     )}
   <Bottom>
   <Titulo>Total: ${precioTotal}</Titulo>
     <form action="https://thawing-fortress-23124.herokuapp.com/checkout/process" method="post">
     <input value={JSON.stringify(state.cart)} name='total' type='hidden' />
     <BotonCarrito  >Pagar</BotonCarrito  >
     </form>
   </Bottom>
</ListaProductos>
  )
}

export default Carrito