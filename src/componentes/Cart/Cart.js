import React, {useContext} from 'react'
import close from '../../assets/icon_close.png'
import {ctxProducto} from '../../contextos/CarritoContexto'
import { ItemProducto, ContenedorImagenes,Titulo } from './styles'
const Cart = ({product}) => {
  const {removeFromCart} = useContext(ctxProducto)
  
  return (
    <>
    {product.cantidad>0 &&(
      <ItemProducto>
        <Titulo>{product.title}</Titulo>
        <Titulo>${product.price}</Titulo>
        <Titulo style={{display:'block',width:'100%'}}>cant:{product.cantidad}</Titulo>

        <ContenedorImagenes>
        <img src={product.images[0]} 
        style={
            {
                width:'70px',
                height:'70px',
            borderRadius:'50%'

            }}
        />
        <img src={close} 
        onClick={()=>removeFromCart(product)}
        style={{
            backgroundColor:'var(--soft-white)',
            padding:'0.5rem',
            width:'10px',
            height:'10px',
            borderRadius:'50%',
            cursor:'pointer'
            }}/>
        </ContenedorImagenes>
    </ItemProducto>
    )}
    </>
    
    
  )
}

export default Cart;