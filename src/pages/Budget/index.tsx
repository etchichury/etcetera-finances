import BudgetCard from "src/components/BudgetCard"
import Button, { ButtonStyle } from "src/components/Button"

const Budget = () => {
  return (
    <div style={{ padding: "100px" }}>
      <BudgetCard budgetName='Groceries' />
      <Button
        style={ButtonStyle.Primary}
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
