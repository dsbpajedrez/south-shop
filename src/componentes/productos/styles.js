import styled from "styled-components";

export const Contenedorproductos = styled.div`
     display:flex;
     flex-wrap:wrap;
     justify-content:space-around;
     gap:1rem;
     overflow:auto;
     height:100vh;
     &::-webkit-scrollbar {
          width: 10px;
      }
     &::-webkit-scrollbar-track {
          background-color: darkgrey;
      }
      &::-webkit-scrollbar-thumb {
          box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      }
      &{
          scrollbar-width: thin;
          scrollbar-color: #6969dd #e0e0e0;
          
      }
 
     
`