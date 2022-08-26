import styled from "styled-components";

export const Container = styled.div` 
    grid-column:4/14;
    grid-row:2/8;
    padding:1rem;
    overflow-x:hidden;
    overflow-y:auto;
    &::-webkit-scrollbar {
        -webkit-appearance: none;
    }

    &::-webkit-scrollbar:vertical {
        width:1.2rem;
    }

    &::-webkit-scrollbar-button:increment,&::-webkit-scrollbar-button {
        display: none;
    }  

    &::-webkit-scrollbar-thumb {
        background-color: #797979;
        border-radius: 20px;
        border: 2px solid #f1f2f3;
        :hover{
            background-color: #0e0b14;
            border: 2px solid white;
        }
    }

    &::-webkit-scrollbar-track {
        border-radius: 1rem;  
    }
    @media(max-width:420px){
        grid-column:1/14;
    }

`