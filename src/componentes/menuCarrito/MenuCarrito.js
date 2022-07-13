import React,{useContext} from 'react'
import ItemsProducto from '../itemProductos/ItemsProducto'
import imagen from '../../assets/icon_shopping_cart_notification.svg'

import {  ItemProducto, ListaProductos } from './styles'
import { ctxProducto } from '../../contextos/CarritoContexto'
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
        
    </ListaProductos>
  )
}

export default MenuCarrito