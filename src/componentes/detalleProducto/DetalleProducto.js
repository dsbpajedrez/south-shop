import React,{useContext} from 'react'
import { useParams } from 'react-router-dom'
import { ctxProducto } from '../../contextos/CarritoContexto'
import OneProduct from '../../hooks/useProductById'
import Item from '../Producto/Item'
import { Boton, Container, LeftContainer} from './style'
import ItemCount from '../Counter/ItemCount'

const DetalleProducto = () => {
    const {addToCart} = useContext(ctxProducto)   
    const id= useParams().id
    const product = OneProduct(id)  
    
    return (
        <>
       {product &&
      
        <Container>
            <Item
            pointer='false'
            title={product?.title ?? ''}
            price={product?.price ?? 0}
            images={product?.images ?? []}
            id={product?.id ?? ''}
            />
            <LeftContainer>
                <ItemCount 
                initial={0}
                stock={3}
                producto={product}/>
                <Boton onClick={()=>{
                    if(product.cantidad>0) addToCart(product)                    
                    }}>Add to cart</Boton>
            </LeftContainer>
        </Container>
           
      

         }  
        </>
    )
    }

export default DetalleProducto