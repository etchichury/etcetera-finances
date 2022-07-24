import styled from "styled-components";

type CustomButtonProps = {
  background: string
  border: string
  color: string
  width: number
  height: number
}

export const CustomButton = styled.button<CustomButtonProps>`
    width: ${props => `${props.width}px`};
    height: ${props => `${props.height}px`};;
    background: ${props => props.background};
    border: ${props => props.border};
    border-radius: 5px;
    color: ${props => props.color};
    cursor: pointer;
    margin-right: 10px;
`
