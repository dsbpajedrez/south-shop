import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    grid-column:5/13;
    grid-row:2/6;
    width:auto;
    height:100%;
    padding:0.5rem;
    border:1px solid gray;
    border-radius:20px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    color:white;
    background-color:var(--verde-claro);
`
export const FormularioLogIn = styled.form`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    gap:0.5rem;
`
export const Label = styled.label`
    font-size:1.8rem;
    width:50%;
`
export const Input = styled.input` 
    width:50%;
`
export const Titulo = styled.h1`
    font-size:2rem;
    withd:100%;
    text-align:center;
`
export const Redirection = styled(Link)`
    font-size: 2rem;
    margin-top:0.5rem;
`
