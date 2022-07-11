import React from 'react'
import { useParams } from 'react-router-dom'
import OneProduct from '../../hooks/useProductById'
import Producto from '../producto/Producto'

const DetalleProducto = () => {
    const id= useParams().id
    const product = OneProduct(id)
    return (
        <>
       {product &&
            <Producto
            title={product?.title ?? ''}
            price={product?.price ?? 0}
            images={product?.images ?? []}
            id={product?.id ?? ''}
            />
         }  
        </>
    )
    }

export default DetalleProducto