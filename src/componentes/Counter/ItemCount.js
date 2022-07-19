import React, {useState, useContext} from 'react'
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
    producto.cantidad = counter;
  return (
    <Container>
        
        <Boton
        disabled={counter<stock? false:true}
        onClick={onAdd}
        style={{
            backgroundColor:'green',
            width:'25%',
            fontSize:'2rem'
        }}
        texto='+'/>
        <Input value={counter}/>
        <Boton
        disabled={counter<1?true:false}
        onClick={restar}
         style={{
            backgroundColor:'red',
            width:'25%',
            fontSize:'2rem'

        }}
        texto='-'/>

    </Container>
  )
}

export default ItemCount