import { useState } from "react"
import {
  BudgetCardContainer,
  Header,
  ProgressBar,
  BudgetActions,
  AddExpanseButton,
  ClearAllButton,
  Table,
  ShowMoreButton,
} from "./styles"
import { ButtonAppearance } from "src/components/Button"

type BudgetCardProps = {
  budgetName: string
  budgetLimit: number
  currentProgress: number
}

const BudgetCard = ({
  budgetName,
  budgetLimit,
  currentProgress,
}: BudgetCardProps) => {
  const [showMenu, setShowMenu] = useState(false)

  const ExpensesTable = () => (
    <Table>
      <tr>
        <td>06/08</td>
        <td>R$ 106</td>
      </tr>
      <tr>
        <td>06/08</td>
        <td>R$ 16</td>
      </tr>
      <tr>
        <td>17/04</td>
        <td>R$ 2324.05</td>
      </tr>
      <tr>
        <td>06/08</td>
        <td>R$ 106</td>
      </tr>
    </Table>
  )

  return (
    <BudgetCardContainer>
      <Header>
        {budgetName}
        <MoreInfoButton />
      </Header>
      <ProgressBar
        aria-label='current budget'
        max={budgetLimit}
        value={currentProgress}
      />
      {showMenu && (
        <>
          <hr />
          <BudgetActions>
            <ClearAllButton
              appearance={ButtonAppearance.Secondary}
              onClick={() => {}}
            >
              Clear All
            </ClearAllButton>
            <AddExpanseButton
              appearance={ButtonAppearance.Secondary}
              onClick={() => {}}
            >
              <Plus size={36} />
            </AddExpanseButton>
          </BudgetActions>
          <ExpensesTable />
        </>
      )}
    </BudgetCardContainer>
  )
}

export default BudgetCard
