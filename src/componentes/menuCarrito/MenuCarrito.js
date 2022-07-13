import React from 'react'
import imagen from '../../assets/icon_shopping_cart_notification.svg'
import { ItemProducto, ListaProductos } from './styles'
const MenuCarrito = () => {
  return (
    <ListaProductos>
         <ItemProducto>
            <p>Item</p>
            <p>Producto</p>
        </ItemProducto>
        <ItemProducto>
            <p>Producto1</p>
            <img src={imagen}/>
        </ItemProducto>
    </ListaProductos>
  )
}

export default MenuCarrito