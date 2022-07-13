import React from 'react'
import close from '../../assets/icon_close.png'
import { ItemProducto, ContenedorImagenes,Titulo } from './styles'
const ItemsProducto = ({product}) => {
  console.log(product)
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
        <img src={close} style={{
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