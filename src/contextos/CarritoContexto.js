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
        return state
    }

    return(
        <ctxProducto.Provider value={{state,addToCart}} >
            {children}
        </ctxProducto.Provider>
    )
}
export default ProductoContext;