import {useState, useEffect} from 'react'
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ProductsFireStore = (collectionName)=>{
    ;
    const [items, setItems] = useState()
    useEffect(()=>{
        const db = getFirestore()
        const collectionRef = collection(db,collectionName)
        getDocs(collectionRef)
            .then(data=>{
                setItems(data)
            }).catch(error => console.log(error))
       
    },[])
    return items
}
export default ProductsFireStore;
