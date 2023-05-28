import styled from "styled-components"

export const Input = styled.input`
  height: 50px;
  width: 100%;
  border: 2px solid #8cc7a1;
  border-radius: 10px;
  padding-left: 10px;
  font-size: 1.5rem;

  ::placeholder {
    opacity: 0.7;
    font-size: 1.5rem;
  }

  &:focus-visible {
    outline: 1px solid #8cc7a1;
  }

  &:invalid {
    outline: 1px solid #dc5d3c;
  }
`
