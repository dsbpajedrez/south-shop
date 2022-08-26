import styled from "styled-components";
import { Link } from "react-router-dom";
export const Container = styled.div`
    grid-column:1/14;
    grid-row:1/2;     
    display:flex;
    justify-content:space-between;
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
    @media(max-width:420px){
        width:4rem;
        height:4rem;
    }
`
export const NumeroItems = styled.p`
    margin:0;
    width:fit-content;
    height:fit-content;
    position:absolute;
    right:1.5px;
    top:0;
    @media(max-width:420px){
        width:0.5rem;
        height:0.5rem;
        right:12px;
        top:0;
    }
    
`
export const ParrafoUsuario=styled.p`
    display:block;
    @media(max-width:420px){
        display:none;
    }
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
    @media(max-width:420px){
        display:none;
    }
`
export const ItemsNavegacion = styled.li`
    
`
export const Links = styled(Link)`
    color:white;
    @media(max-width:420px){
        display:none;
    }
`
export const MenuPhoneContainer= styled.div`
    @media(max-width:420px){
        display:block;
    }
    @media(min-width:421px){
        display:none;
    }
`