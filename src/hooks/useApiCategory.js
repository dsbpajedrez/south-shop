import { useState,useEffect } from "react";

const GetOneCategory = API =>{
    const [category,setCategory] = useState()
    useEffect(()=>{
        fetch(API)
                .then(respuesta => respuesta.json())
                .then(data=>setCategory(data))
    },[])
    
    return category;
}

export default GetOneCategory