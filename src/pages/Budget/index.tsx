import { Plus } from "styled-icons/bootstrap"
import Button from "components/Button"
import { BudgetGrid, BudgetPageContainer } from "./styles"
import BudgetCard from "./components/BudgetCard"
import { CreateBudgetModal } from "./components/CreateBudgetModal"
import { useRef } from "react"

type BudgetEntry = {
  id: number
  description: string
  value: number
}

const Budget = () => {
  const budgetModalRef = useRef<HTMLDialogElement>(null)

  const budgetEntries: BudgetEntry[] = [
    { id: 1, description: "Almoço 06/08", value: 123.34 },
    { id: 2, description: "Mercado 17/12", value: 800.34 },
  ]

  return (
    <>
      <BudgetPageContainer>
        <h2>Budget planning</h2>
        <h5>
          Add, edit and delete your expenses. Here you will see on what you've
          being expending, dates and costs of each item you add.
        </h5>
        <BudgetGrid>
          <BudgetCard
            budgetName='Groceries'
            budgetLimit={800}
            currentProgress={400}
            expenses={budgetEntries}
          />
          <BudgetCard
            budgetName='Cinema'
            budgetLimit={100}
            currentProgress={37}
            expenses={budgetEntries}
          />
          <BudgetCard
            budgetName='Streaming'
            budgetLimit={500}
            currentProgress={430}
            expenses={budgetEntries}
          />
          <BudgetCard
            budgetName='Comics'
            budgetLimit={200}
            currentProgress={56}
            expenses={budgetEntries}
          />
        </BudgetGrid>
        <Button
          appearance='primary'
          onClick={() => budgetModalRef.current?.showModal()}
        >
          <Plus size={42} />
        </Button>
      </BudgetPageContainer>
      <CreateBudgetModal ref={budgetModalRef} />
    </>
  )
}

export default Budget
