import styled from "styled-components"

type CustomButtonProps = {
  background: string
  border: string
  color: string
}

export const CustomButton = styled.button<CustomButtonProps>`
  background: ${(props) => props.background};
  border: ${(props) => props.border};
  border-radius: 5px;
  color: ${(props) => props.color};
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`
