import React from 'react'
import { CardContainer, Imagen, Parrafo, TituloProducto, Anchor } from './styles'


const ItemDetail = ({title,price, image,id, pointer='true'}) => {

  return (
    <CardContainer pointer={pointer}>
      <Anchor to={`/item/${id}`} pointer={pointer} >
        <TituloProducto>{title}</TituloProducto>
        <Imagen src={image}/>
        <Parrafo>${price}</Parrafo>
      </Anchor>
    </CardContainer>
  )
}

export default ItemDetail