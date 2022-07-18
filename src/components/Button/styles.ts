import styled from "styled-components";

type CustomButtonProps = {
  background: string
  border: string
  color: string
}

export const CustomButton = styled.button<CustomButtonProps>`
    width: 100px;
    height: 50px;
    background: ${props => props.background};
    border: ${props => props.border};
    border-radius: 5px;
    color: ${props => props.color};
    cursor: pointer;
`
