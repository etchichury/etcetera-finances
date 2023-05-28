import styled from "styled-components"

export const CustomButton = styled.button`
  border-radius: 10px;
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
