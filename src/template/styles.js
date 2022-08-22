import styled from "styled-components";

export const Container = styled.div`
    display:grid;
    grid-template-columns: repeat(13, 1fr);
    grid-template-rows: auto repeat(5, 1fr) auto ;
    padding:0.5rem;
    height:100vh; 
    oeverflow:hidden;
 
`