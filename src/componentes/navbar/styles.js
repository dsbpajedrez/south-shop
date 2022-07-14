import styled from "styled-components";
import { Link } from "react-router-dom";
export const Container = styled.div`
    grid-column:1/14;
    grid-row:1/3; 
    
    display:flex;
    justify-content:space-between;
    // border-bottom:1px solid var(--gris-claro) ;
    background-color:var(--fondo-gris);
    padding:0.5rem;
    height:80px;
    font-size:var(--size-links);
    color:white;
`
export const Logo = styled.img`
    width:5rem;
    height:5rem;
    border-radius:50%;
`
export const IMGShoppingCart = styled.img`
    width:3.5rem;
    height:3.5rem;
    cursor:pointer;
    position:relative;
`
export const NumeroItems = styled.p`
margin:0;
    width:fit-content;
    height:fit-content;
    position:absolute;
    right:1.5px;
    top:0;
    
`
export const RightSide = styled.div`
    display:flex;
    justify-content:space-between;
    width:15%;
    position:relative;
`
export const Navegacion = styled.ul`
    width:50%;
    display:flex;
    justify-content:space-between;
    list-style:none;
    gap:0.5rem;
`
export const ItemsNavegacion = styled.li`
    
`
export const Links = styled(Link)`
    color:white;
`