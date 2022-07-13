export const reducerArray = (arr)=>{
    const reducer = (previous,actual) => previous + actual;
    return arr.reduce(reducer)
    
}