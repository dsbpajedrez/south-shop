import styled from "styled-components";
import { Link } from "react-router-dom";

export const Lista = styled.ul` 
    list-style:none;
    padding:0.5rem;
`
export const Item = styled.li`
    font-size:var(--size-links);
    border-bottom:1px solid var(--gris-claro);
    padding:0.5rem;
    cursor:pointer;
    transition: padding 0.5s;
    &:hover{
        padding:1rem;
    }
`
export const Links = styled(Link)`
    color:var(--gris-claro);
    text-decoration:none;
`