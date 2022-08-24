import React,{ useState } from "react"
export const ctxProducto = React.createContext({})


const ProductoContext = ({children})=>{
    const userAtLocalStorage= localStorage.getItem('user')
    const initialState = {
        user:userAtLocalStorage?userAtLocalStorage:null,
        cart:[]
    }
    const [state,setState]= useState(initialState)

    const addToCart = (payload)=>{
        let existe = state.cart.find(item=>item.id==payload.id)
        setState({
            ...state,
            cart: existe ==undefined? [...state.cart, payload]:[...state.cart]
        })       
    }
    const removeFromCart =payload=>{
        console.log(payload);
        localStorage.removeItem('cart')
        setState({
            ...state,
            cart: state.cart.filter(item=> item.id!=payload.id)
        }) 
        localStorage.setItem('cart',JSON.stringify([...state.cart]))       
    }
    return(
        <ctxProducto.Provider value={{state,addToCart,removeFromCart,setState}} >
            {children}
        </ctxProducto.Provider>
    )
}
export default ProductoContext;