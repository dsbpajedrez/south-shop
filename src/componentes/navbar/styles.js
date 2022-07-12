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
    width:3rem;
    height:3rem;
`
export const RightSide = styled.div`
    display:flex;
    justify-content:space-between;
    width:15%;
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