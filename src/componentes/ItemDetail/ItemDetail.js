import React from 'react'
import { CardContainer, Imagen, Parrafo, TituloProducto, Anchor } from './styles'


const ItemDetail = ({title,price, images,id, pointer='true'}) => {
  return (
    <CardContainer pointer={pointer}>
      <Anchor to={`/item/${id}`} pointer={pointer} >
        <TituloProducto>{title}</TituloProducto>
        <Imagen src={images[0]}/>
        <Parrafo>${price}</Parrafo>
      </Anchor>
    </CardContainer>
  )
}

export default ItemDetail