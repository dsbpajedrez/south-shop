import styled from "styled-components";

export const Container = styled.div`
    width:100%;
    display:flex;
    justify-content:space-around;
    @media(max-width:320px){
        flex-direction:column-reverse;
        justify-content:space-around;
        min-height:100px;
        width:100%;
        align-items:center;
    }
`
export const Input = styled.input`
    border:1px solid var(--fondo-gris);
    width:fit-content;
    text-align:center;
    border-radius: 1rem;
`