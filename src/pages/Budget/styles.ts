import styled from "styled-components"

export const BudgetPageContainer = styled.div`
  padding: 18px 36px;
  position: relative;
  width: 100%;
  overflow: auto;

  > button {
    position: fixed;
    bottom: 16px;
    right: 16px;
    width: 50px;
    height: 50px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

  @media (max-width: 600px) {
    margin-top: 60px;
  }
`

export const BudgetGrid = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 26px;
`
