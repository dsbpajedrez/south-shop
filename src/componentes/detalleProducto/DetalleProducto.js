import React,{useContext} from 'react'
import { useParams } from 'react-router-dom'
import { ctxProducto } from '../../contextos/CarritoContexto'
import OneProduct from '../../hooks/useProductById'
import Producto from '../Producto/Producto'
import { Boton, Container } from './style'

const DetalleProducto = () => {
    const {addToCart,state} = useContext(ctxProducto)
    console.log(state)
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
            <Boton onClick={()=>addToCart(product)}>Add to cart</Boton>
        </Container>
         }  
        </>
    )
    }

export default DetalleProducto