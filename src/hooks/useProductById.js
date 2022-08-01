import  {useEffect,useState} from "react";

const GetItem = (id)=>{
  
    const [producto, setProducto] = useState({})
    const API_PRODUCTS =`https://api.escuelajs.co/api/v1/products/${id}`

    useEffect(()=>{
        fetch(API_PRODUCTS)
            .then(respuesta => respuesta.json())
            .then(data=> setProducto(data))
    },[id])
    return producto
}
export default GetItem;
