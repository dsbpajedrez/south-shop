import { Link } from "react-router-dom";
import styled from "styled-components";

export const  List = styled.ul`
    list-style:none;
    display: flex;
    flex-direction:column;
    position:absolute;
    top:8rem;
    left:0.5rem;
    background-color:var(--verde-claro);
    color:white;
    z-index:200;
    padding:1rem;
    border-radius:1rem;
`
export const Item = styled.li`
    width:100%;    
`
export const Redirection = styled(Link)`
    color:white;
    text-decoration:none;
`