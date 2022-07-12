import React from 'react'
import { CardContainer, Imagen, Parrafo, TituloProducto, Anchor } from './styles'


const Producto = ({title,price, images,id, pointer='true'}) => {
  return (
    <CardContainer pointer={pointer}>
      <Anchor to={`/detail/${id}`} pointer={pointer} >
        <TituloProducto>{title}</TituloProducto>
        <Imagen src={images[0]}/>
        <Parrafo>${price}</Parrafo>
      </Anchor>
    </CardContainer>
  )
}

export default Producto