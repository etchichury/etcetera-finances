import styled from "styled-components"
import Button from "src/components/Button"

export const BudgetCardContainer = styled.article`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 18px;
  box-shadow: 0 0px 8px hsl(0deg 0% 0% / 0.075);
  height: fit-content;

  > hr {
    border: 0;
    height: 1px;
    background: rgba(0, 0, 0, 0.2);
  }
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  margin-bottom: 20px;
`

export const ShowMoreButton = styled(Button)<{ showMore: boolean }>`
  width: 50px;
  transform: rotate(0deg);
  transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transform: ${(props) => (props.showMore ? `rotate(180deg)` : "")};
`

export const BudgetTextualProgress = styled.div<{ currentProgress: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) =>
    props.currentProgress ? "space-between" : "center"};
  padding: 0 8px;
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
    background-color: #8cc7a1;
  }

  ::-moz-progress-bar {
    background-color: #8cc7a1;
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
  width: 35px;
  height: 35px;
  border-radius: 5px;
`

export const ClearAllButton = styled(Button)`
  width: 100px;
  height: 35px;
  padding: 0 8px;
  border-radius: 5px;
`

export const NoExpensesWarningContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 18px;
  border: solid 1px;
  border-radius: 8px;
  padding: 4px;
  color: #e71f1b;
`

export const Table = styled.table`
  margin: 0 -4px;
  margin-top: 12px;
  border-spacing: 0;
  border-radius: 8px;
  border: solid 1px #97ead2;
  overflow: hidden;
  font-size: 1.15rem;

  tr:nth-of-type(odd) {
    background-color: #97ead2;
  }

  td {
    padding: 4px 16px;
  }

  td:nth-of-type(even) {
    text-align: end;
  }
`

export const ContextualMenuContainer = styled.div<{ x: number; y: number }>`
  background-color: white;
  border: solid 1px #97ead2;
  border-radius: 8px;
  width: fit-content;
  position: absolute;
  top: ${(props) => `${props.y}px`};
  left: ${(props) => `${props.x}px`};
  overflow: hidden;

  > div {
    cursor: pointer;
    padding: 8px 12px;

    &:hover {
      background: #8cc7a1;
    }
  }
`
