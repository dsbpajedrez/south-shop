import styled from 'styled-components'

export const ListaProductos = styled.ul`
    position:absolute;
    width:30rem;
    top:80px;
    right:0;
    height:100%;
    background-color:var(--azul-claro);
    z-index:150;
    padding:0.5rem;
    border-radius:1rem;
    height:fit-content;

`
export const ItemProducto = styled.li`
    display:flex;
    justify-content:space-between;
    color:var(--soft-white);
`