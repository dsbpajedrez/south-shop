import { useState,useEffect } from "react";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

const CategoriesFireStore = (category) =>{
    const [ cat, setCat] = useState()
    useEffect(()=>{
        const db = getFirestore()
        const categoryColection = query(
            collection(db,'productos'),
            where('category','==',`${category}`)
            )
            getDocs(categoryColection)
                .then(data=> setCat(data?.docs?.map(item=>{
                    return {
                        id:item.id,
                        ...item.data()
                    }
                })))
                .catch(error=>console.log(error))
    },[category])
   
    return cat;
}
export default CategoriesFireStore;