import { useState } from "react"
import { ChevronCompactDown, Plus } from "@styled-icons/bootstrap"
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
  const [showMore, setshowMore] = useState(false)

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
        <h3>{budgetName}</h3>
        <ShowMoreButton
          appearance={ButtonAppearance.Tertiary}
          showMore={showMore}
          onClick={() => setshowMore((prevState) => !prevState)}
        >
          <ChevronCompactDown size={40} />
        </ShowMoreButton>
      </Header>
      <ProgressBar
        aria-label='current budget'
        max={budgetLimit}
        value={currentProgress}
      />
      {showMore && (
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
