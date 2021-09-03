import styled, { css } from "styled-components";

export const Container = styled.section`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2.5rem 1rem;

  background-color: var(--branco);
  border-radius: 1rem;

  margin-top: -10rem;
  padding: 4.5rem 4rem;

  filter: drop-shadow(0px 24px 64px rgba(0,0,0,0.6));

`;
//////////////////////////////////////////////////////////////
export const Header = styled.header`

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  h2 {
    color: var(--text-title);
    font-size: 2.25rem;
  }

  div {
    display: flex;
    align-items: center;

    background-color: #FFF;
    font-size: 1rem;

    input {
      flex: 1;
      background-color: var(--background);
      border: 0;
      color: var(--text);
      padding: 0.75rem 1.5rem;
      border-radius: 0.5rem;
    }

    &::placeholder {
      color: var(--text-light);
    }

    button {
      font-weight: 600;
      border-radius: 6px;
      border: 0;
      background-color: var(--green);
      color: #FFF;
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 0.87rem;

      margin-left: 0.6rem;
      transition: filter 0.3s;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`;
/////////////////////////////////////////////////
export const Content = styled.main`
  margin-top: 3rem;

  ul {
    list-style: none;
    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #3d3d3d;
      padding: 1rem 0;

      button {
        background-color: transparent;
        border: 0;

        svg {
          color: red;
          transition: filter 0.8s;
        }

        &:hover {
          svg {
            filter: brightness(0.9);
          }
        }
      }
    }
  }
`;
////////////////////////////////////////////////

interface TaskProps {
  isComplete: boolean;
}

export const Task = styled.div<TaskProps>`
  display: flex;
  align-items: center;
  outline: 0;

  input {
    margin-right: 0.5rem;
  }

  p {
    ${({ isComplete }) => isComplete && css`
      text-decoration: line-through;
      opacity: 0.6;
    `}
  }
`;