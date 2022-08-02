import styled from "styled-components";

export const Container = styled.div` 
    grid-column: 1/14;
    grid-row:7/8;
    display:flex;
    justify-content:space-around;
    padding:0.5rem;
    background-color: var(--fondo-gris); 
`
export const SocialMediaImg = styled.img`
    width:70px;
    height:70px;
    cursor:pointer;
    background-color: var(--fondo-gris);
    // color:#fff;
    box-shadow: 2px 2px 2px var(--animation-icons), 10px 1px 12px var(--animation-icons),
    2px 2px 10px var(--animation-icons), 2px 2px 3px var(--animation-icons), inset 2px 2px 10px var(--animation-icons),
    inset 2px 2px 10px var(--animation-icons), inset 2px 2px 10px var(--animation-icons),
    inset 2px 2px 10px var(--animation-icons);
    border-radius:10px;
    padding:3px 3px;
    margin: 0 40px;
    animation: animate 3s linear infinite;
    text-shadow: 0 0 50px var(--animation-base-color), 0 0 100px var(--animation-base-color), 0 0 150px var(--animation-base-color),
    0 0 200px var(--animation-base-color);
    animation-delay:0.3s;
    @keyframes animate {
        from {
          filter: hue-rotate(0deg);
        }
        to {
          filter: hue-rotate(360deg);
        }
      }
`