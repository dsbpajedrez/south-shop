import React, {useState, useContext, useEffect} from 'react'
import { Input , Container} from './styles'
import Boton from '../../estilosComunes/BotonLogIn'

const ItemCount = ({producto, initial, stock}) => {    
    const [counter ,setCounter] = useState(initial);
    const onAdd = ()=>{
        setCounter(counter+1)        
    }
    const restar = ()=>{
        if(counter<1) setCounter(0)
        else{
            setCounter(counter-1)            
        } 
    }
   useEffect(()=>{
    producto[0].cantidad = counter;
   },[counter])
    
  return (
    <Container>
        
        <Boton
        disabled={counter<1?true:false}
        onClick={restar}
         style={{
             backgroundColor:'var(--rojo-soft)',
             fontSize:'2rem'
            
            }}
        texto='-'/>
        <Input value={counter}/>
            <Boton
            disabled={counter<stock? false:true}
            onClick={onAdd}
            style={{
                backgroundColor:'var(--verde-claro)',
                fontSize:'2rem'
            }}
            texto='+'/>

    </Container>
  )
}

export default ItemCount