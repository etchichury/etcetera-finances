import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import BudgetCard from "src/components/BudgetCard"

test("BudgetCard collapsed renders desired content", () => {
  render(
    <BudgetCard
      budgetName='Groceries'
      budgetLimit={800}
      currentProgress={300}
    />
  )

  expect(screen.getByRole("heading")).toHaveTextContent(/groceries/i)
  expect(screen.getByText(/R$ 800/i)).toBeInTheDocument()
  expect(screen.getByText(/R$ 300/i)).toBeInTheDocument()
})

test("BudgetCard renders desired content when expanded", async () => {
  const user = userEvent.setup()
  render(
    <BudgetCard
      budgetName='Groceries'
      budgetLimit={800}
      currentProgress={300}
    />
  )

  await user.click(screen.getByRole("button", { name: /expand content/i }))

  expect(screen.getByRole("button", { name: /clear all/i })).toBeInTheDocument()
  expect(screen.getByRole("button", { name: /add entry/i }))
})
