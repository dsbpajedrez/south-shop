import React from 'react'
import { useParams } from 'react-router-dom'
import OneProduct from '../../hooks/useProductById'
import Producto from '../producto/Producto'
import { Boton, Container } from './style'

const DetalleProducto = () => {
    const id= useParams().id
    const product = OneProduct(id)
    return (
        <>
       {product &&
        <Container>
            <Producto
            pointer='false'
            title={product?.title ?? ''}
            price={product?.price ?? 0}
            images={product?.images ?? []}
            id={product?.id ?? ''}
            />
            <Boton>Add to cart</Boton>
        </Container>
         }  
        </>
    )
    }

export default DetalleProducto