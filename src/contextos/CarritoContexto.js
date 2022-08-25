import React,{ useState, useEffect } from "react"
export const ctxProducto = React.createContext({})


const ProductoContext = ({children})=>{
    const userAtLocalStorage= localStorage.getItem('user')
    const initialState = {
        user:userAtLocalStorage?userAtLocalStorage:null,
        cart:localStorage.getItem('cart')? JSON.parse(localStorage.getItem('cart')):[]
    }
    const [state,setState]= useState(initialState)
    useEffect(()=>{
        localStorage.setItem('cart',JSON.stringify([...state.cart])) 
    },[state])

    const addToCart = (payload)=>{
        let existe = state.cart.find(item=>item.id==payload.id)
        setState({
            ...state,
            cart: existe ==undefined? [...state.cart, payload]:[...state.cart]
        })       
    }
    const removeFromCart =payload=>{        
        setState({
            ...state,
            cart: state.cart.filter(item=> item.id!=payload.id)
        }) 
             
    }
    return(
        <ctxProducto.Provider value={{state,addToCart,removeFromCart,setState}} >
            {children}
        </ctxProducto.Provider>
    )
}
export default ProductoContext;