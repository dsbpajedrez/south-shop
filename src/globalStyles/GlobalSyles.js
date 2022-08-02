import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root{
        box-sizing:border-box;
        margin:0;
        padding:0;
        font-size:62.5%;
        overflow-x:hidden;

        --verde-claro :hsl(116, 73%, 74%);
        --rojo-soft:hsl(0, 72%, 53%);
        --soft-white:hsl(169, 9%, 99%);
        --azul-claro:hsl(181, 32%, 63%);
        --gris-claro:hsl(181, 2%, 71%);
        --fondo-gris:hsl(44, 24%, 80%);
        --animation-icons:#2c771c;
        --animation-base-color:#8e402a;

        --size-links: 1.6rem;
        --size-title:2rem;
        --size-subtitle:1.8rem;
        --size-parrafo:1.4rem;

        --sombras-cards:var(--gris-claro) 0px 7px 29px 0px;

    }
    body{
      
        font-family: Open-Sans, Helvetica, Sans-Serif;
    }
`