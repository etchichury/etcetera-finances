import BudgetCard from "src/components/BudgetCard"
import Button, { ButtonAppearance } from "src/components/Button"

type BudgetEntry = {
  id: number
  description: string
  value: number
}

const Budget = () => {
  const budgetEntries: BudgetEntry[] = [
    { id: 1, description: "Almoço 06/08", value: 123.34 },
    { id: 2, description: "Mercado 17/12", value: 800.34 },
  ]

  return (
    <div style={{ padding: "100px" }}>
      <BudgetCard
        budgetName='Groceries'
        budgetLimit={800}
        currentProgress={400}
        expenses={budgetEntries}
      />
      <Button appearance={ButtonAppearance.Primary} onClick={() => {}}>
        Accept
      </Button>
    </div>
  )
}

export default Budget
