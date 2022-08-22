import { useState,useEffect } from "react";
import {  collection, getDocs, getFirestore, query, where } from "firebase/firestore";

const ProducsFireStore = (id)=>{
    const [product,setProduct] = useState()
    useEffect(()=>{
        const db = getFirestore()
        const getDoc = query(
            collection(db,'productos'),
            where('id','==',id)
            )
            getDocs(getDoc)
                .then(doc=>{                    
                    setProduct(doc?.docs?.map(item=>{
                        console.log(item);
                        return {
                        id:item.id,
                        ...item.data()
                    }}))
                })
    },[])
   
    return product;
}
export default ProducsFireStore