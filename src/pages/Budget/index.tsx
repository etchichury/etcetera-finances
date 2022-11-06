import BudgetCard from "src/components/BudgetCard"
import Button, { ButtonAppearance } from "src/components/Button"

const Budget = () => {
  return (
    <div style={{ padding: "100px" }}>
      <BudgetCard
        budgetName='Groceries'
        budgetLimit={800}
        currentProgress={400}
      />
      <Button
        appearance={ButtonAppearance.Primary}
        onClick={() => {
          console.log("Accept")
        }}
      >
        Accept
      </Button>
    </div>
  )
}

export default Budget
