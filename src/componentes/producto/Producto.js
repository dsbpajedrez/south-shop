import React from 'react'
import { CardContainer, Imagen } from './styles'

const Producto = ({title,price, images}) => {
  return (
    <CardContainer>
        <h1>{title}</h1>
        <Imagen src={images[0]}/>
        <p>{price}</p>
    </CardContainer>
  )
}

export default Producto