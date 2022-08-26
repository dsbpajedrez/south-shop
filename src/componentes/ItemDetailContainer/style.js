import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    justify-content:space-around;
    @media(max-width:420px){
        display:flex;
        flex-direction:column;
    }
`
export const Boton = styled.button`
    height:fit-content;
    width:50%;
    align-self:flex-end;
    border-radius:1rem;
    border:1px solid green;
    background-color:green;
    color:var(--soft-white);
    padding:0.5rem;
    cursor:pointer;
`
export const LeftContainer = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    padding:1rem;
    align-items:center;
`
