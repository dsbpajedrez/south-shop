import React,{ useState } from "react"
export const ctxProducto = React.createContext({})


const ProductoContext = ({children})=>{
    const initialState = {
        cart:[]
    }
    const [state,setState]= useState(initialState)

    const addToCart = (payload)=>{
        setState({
            ...state,
            cart: [...state.cart, payload]
        })       
    }
    const removeFromCart =payload=>{
        setState({
            ...state,
            cart: state.cart.filter(item=> item.id!=payload.id)
        })        
    }
    return(
        <ctxProducto.Provider value={{state,addToCart,removeFromCart}} >
            {children}
        </ctxProducto.Provider>
    )
}
export default ProductoContext;