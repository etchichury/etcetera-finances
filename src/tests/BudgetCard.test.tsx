import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import BudgetCard from "src/pages/Budget/components/BudgetCard"

test("renders desired content when collapsed", () => {
  render(<BudgetCard budgetName='Groceries' budgetLimit={800} />)

  expect(
    screen.getByRole("heading", { name: /groceries/i })
  ).toBeInTheDocument()
  expect(screen.getByRole("heading", { name: "R$ 800" })).toBeInTheDocument()
})

test("renders current progress when provided", () => {
  render(
    <BudgetCard
      budgetName='Groceries'
      budgetLimit={800}
      currentProgress={300}
    />
  )

  expect(screen.getByRole("heading", { name: "R$ 800" })).toBeInTheDocument()
  expect(screen.getByRole("heading", { name: "R$ 300" })).toBeInTheDocument()
})

test("renders desired content when expanded", async () => {
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

test("renders contextual menu when right clicking table cell", async () => {
  const user = userEvent.setup()
  render(
    <BudgetCard
      budgetName='Groceries'
      budgetLimit={800}
      currentProgress={300}
      expenses={[
        { id: 1, description: "Almoço 06/08", value: 123.34 },
        { id: 2, description: "Mercado 17/12", value: 800.34 },
      ]}
    />
  )

  await user.click(screen.getByRole("button", { name: /expand content/i }))

  const expenseCell = screen.getByRole("cell", { name: "Almoço 06/08" })
  await user.pointer({ target: expenseCell, keys: "[MouseRight]" })

  expect(screen.getByRole("menuitem", { name: /edit/i })).toBeInTheDocument()
  expect(screen.getByRole("menuitem", { name: /delete/i })).toBeInTheDocument()
})

test("show warning message when no expenses are present", async () => {
  const user = userEvent.setup()
  render(
    <BudgetCard
      budgetName='Groceries'
      budgetLimit={800}
      currentProgress={300}
      expenses={[]}
    />
  )

  await user.click(screen.getByRole("button", { name: /expand content/i }))

  expect(screen.getByText(/no expenses for this budget/i))
})
