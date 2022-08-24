import React,{useContext, useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { ctxProducto } from '../../contextos/CarritoContexto'
import ItemDetail from '../ItemDetail/ItemDetail'
import { Boton, Container, LeftContainer} from './style'
import ItemCount from '../Counter/ItemCount'
import ProducsFireStore from '../fireStoreData/ProductFireStore/ProductFireStore'

const ItemDetailContainer = () => {
    const {addToCart, state} = useContext(ctxProducto)   
    const id= useParams().id
    const product = ProducsFireStore(id) 
     
    return (
        <>
       {product &&      
        <Container>
            <ItemDetail
            pointer='false'
            title={product[0]?.title ?? ''}
            price={product[0]?.price ?? 0}
            image={product[0]?.image ?? ''}
            id={product[0]?.id ?? ''}
            />
            <LeftContainer>
                <ItemCount 
                initial={0}
                stock={product[0]?.stock??0}
                producto={product}/>
                <Boton onClick={()=>{
                    if(product[0]?.cantidad>0) {
                        const send = [...(JSON.parse(localStorage.getItem('cart'))),product[0]]
                        addToCart(send)
                        localStorage.setItem('cart',JSON.stringify(send))
                    }
                    }}>Add to cart</Boton>
            </LeftContainer>
        </Container>
           
      

         }  
        </>
    )
    }

export default ItemDetailContainer