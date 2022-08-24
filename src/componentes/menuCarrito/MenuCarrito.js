import React,{useContext} from 'react'
import {  BotonCarrito, Bottom, ItemProducto, ListaProductos } from './styles'
import { ctxProducto } from '../../contextos/CarritoContexto'
import { reducerArray } from '../../funciones/reducerArray'
import Cart from '../Cart/Cart'
const MenuCarrito = () => {
  const {state} = useContext(ctxProducto)
 const cartFromLocal =JSON.parse(localStorage.getItem('cart'))
  const cartToBuy =()=>{
    if(state?.cart?.length>cartFromLocal){
      return state?.cart
    }else{
      return cartFromLocal
    }
  }
 
  return (
    <ListaProductos>
         <ItemProducto>
            <p>Item</p>
            <p>Producto</p>
        </ItemProducto>
        {cartToBuy()?.length>0 && cartToBuy()?.map(producto=>
          <Cart product={producto} />
          )}
        <Bottom>
        <p>Total: ${cartToBuy()?.length>0 ? reducerArray(cartToBuy()?.map(producto=> {
     
          return Number(producto.price)*producto.cantidad
          })):'0'}</p>
          <BotonCarrito to='/carrito' >Ir a carrito</BotonCarrito  >
        </Bottom>
    </ListaProductos>
  )
}

export default MenuCarrito