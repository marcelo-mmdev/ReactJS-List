// Configuração da Parte de cima de logo
import styled from "styled-components";
export const Container = styled.header`
  background-color: var(--debian);
  padding-top: 2rem; //1rem = font-size = no caso aqui font-size=16px

  div {
    max-width: 1120px;
    margin: 0 auto;
    padding: 2rem 1rem 12rem;

    display: flex;
    align-content: center;
    justify-content: center;

    img {
      width: 25rem;
      display: flex;
    }
  }
`;