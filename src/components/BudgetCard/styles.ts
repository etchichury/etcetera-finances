import styled from "styled-components"
import { ProgressBarProps } from "."

export const BudgetCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 18px;
  box-shadow: 0 0px 8px hsl(0deg 0% 0% / 0.075);
  margin-bottom: 20px;
  width: 350px;
  height: fit-content;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.75rem;
  text-transform: uppercase;
  margin-bottom: 20px;
`

export const ProgressBarContainer = styled.div`
  width: 98%;
  height: 16px;
  align-self: center;
  border: solid 1px;
  border-radius: 12px;
  overflow: hidden;
`

export const Progress = styled.div<ProgressBarProps>`
  width: ${(props) => props.progressPercentage}%;
  height: 16px;
  background-color: #8CC7A1;
`
