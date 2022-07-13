import React, {useContext} from 'react'
import close from '../../assets/icon_close.png'
import {ctxProducto} from '../../contextos/CarritoContexto'
import { ItemProducto, ContenedorImagenes,Titulo } from './styles'
const ItemsProducto = ({product}) => {
  const {removeFromCart} = useContext(ctxProducto)
  return (
    <ItemProducto>
        <Titulo>{product.titulo}</Titulo>
        <ContenedorImagenes>
        <img src={product.images[0]} 
        style={
            {
                width:'70px',
                height:'70px'
            }}
        />
        <img src={close} 
        onClick={()=>removeFromCart(product)}
        style={{
            backgroundColor:'var(--soft-white)',
            padding:'0.5rem',
            width:'10px',
            height:'10px'
            }}/>
        </ContenedorImagenes>
    </ItemProducto>
  )
}

export default ItemsProducto