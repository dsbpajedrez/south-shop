import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const ListaProductos = styled.ul`    
    height:100vh;
    background-color:var(--gris-claro);
    padding:1.5rem;
    border-radius:1rem;
    height:fit-content;
`
export const ItemProducto = styled.li`
    display:flex;
    justify-content:space-between;
    color:var(--soft-white);
`
export const ContenedorImagenes = styled.div`
    display:flex;
`
export const Bottom = styled.div` 
    display:flex;
    justify-content:space-between;
    align-items:center;
`
export const BotonCarrito = styled.button`
    cursor:pointer;
    padding:1rem;
    font-size:1.8rem;
    background-color:var(--verde-claro);
    border-radius:1rem;
    width:fit-content;
    height:fit-content;
    text-decoration:none;
    color:var(--soft-white);
`
export const Titulo = styled.h1`
    color:white;
`
