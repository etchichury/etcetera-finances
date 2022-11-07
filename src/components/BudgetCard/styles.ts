import styled from "styled-components"
import Button from 'src/components/Button'

export const BudgetCardContainer = styled.article`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 18px;
  box-shadow: 0 0px 8px hsl(0deg 0% 0% / 0.075);
  margin-bottom: 20px;
  width: 350px;
  height: fit-content;

  > hr {
    border: 0;
    height: 1px;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.20), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.20));
  }
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  margin-bottom: 20px;
`

export const ShowMoreButton = styled(Button)<{showMore: boolean}>`
  transform: rotate(0deg);
  transition: transform 0.3s cubic-bezier(.25,.46,.45,.94);
  transform: ${props => (props.showMore ? `rotate(180deg)` : "")};
`

export const ProgressBar = styled.progress`
  width: 98%;
  height: 16px;
  align-self: center;
  border: solid 1px;
  border-radius: 12px;
  overflow: hidden;
  background-color: white;
  margin-bottom: 16px;

  ::-webkit-progress-bar {
    background-color: white;
  }

  ::-webkit-progress-value {
    background-color: #8CC7A1;
  }

  ::-moz-progress-bar {
    background-color: #8CC7A1;
  }

`

export const BudgetActions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  margin-top: 12px;
  gap: 8px;
`

export const AddExpanseButton = styled(Button)`
  width: fit-content;
`

export const ClearAllButton = styled(Button)`
  padding: 0 8px;
`

export const Table = styled.table`
  margin: 0 -4px;
  margin-top: 12px;
  border-spacing: 0;
  border-radius: 8px;
  border: solid 1px #97EAD2;
  overflow: hidden;
  font-size: 1.15rem;

  tr:nth-of-type(odd) {
    background-color: #97EAD2;
  }

  td {
    padding: 4px 16px;
  }

  td:nth-of-type(even) {
    text-align: end;
  }
`

export const ContextualMenuContainer = styled.div<{x: number, y: number}>`
  background-color: white;
  border: solid 1px;
  border-radius: 8px;
  width: fit-content;
  position: absolute;
  top: ${props => `${props.y}px`};
  left:${props => `${props.x}px`};
`
