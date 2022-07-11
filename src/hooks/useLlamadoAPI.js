import {useEffect,useState} from 'react'

export const useLlamadoAPI = (API)=>{
    const [productos, setProductos] =useState([])
    useEffect(()=>{
        fetch(API)
            .then(respuesta => respuesta.json())
            .then(data => setProductos(data))
    },[])
    return productos
}
export default useLlamadoAPI;
