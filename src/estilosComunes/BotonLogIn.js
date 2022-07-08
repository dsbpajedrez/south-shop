import { useRef } from "react";
import styled from "styled-components";

const BotonLogIn = styled.button`
    padding:0.5rem;
    background-color:var(--azul-claro);
    border: 0.1rem solid var(--gris-claro);
    border-radius:1rem;
    cursor:pointer;
    width: ${({width})=> width && width};
    
`

const Boton = ({texto, width,style})=>{
    let boton = useRef();
    
    return(<BotonLogIn
        ref={boton}
        width={width}
        style={style}
    >
        {texto}
    </BotonLogIn>)
}
export default Boton;