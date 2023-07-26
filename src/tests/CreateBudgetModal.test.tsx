import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { CreateBudgetModal } from "pages/Budget/components/CreateBudgetModal"

test("Budget limit correctly formats currency", async () => {
  const user = userEvent.setup()
  render(<CreateBudgetModal />)

  const budgetLimtitInput = screen.getByLabelText("Budget limit")

  expect(budgetLimtitInput).toHaveTextContent("")

  await user.type(budgetLimtitInput, "150")
  // Intl.NumberFormat for currencies use a non-breking space (\xa0)
  expect(budgetLimtitInput).toHaveValue("R$\xa01,50")
})

test("Budget limit input is disable when 'No limit' is set", async () => {
  const user = userEvent.setup()
  render(<CreateBudgetModal />)

  const budgetLimitInput = screen.getByLabelText("Budget limit")
  await user.type(budgetLimitInput, "50")

  expect(budgetLimitInput).toHaveValue("R$\xa00,50")

  const checkbox = screen.getByRole("checkbox", {
    name: "No limit",
    hidden: true,
  })
  await user.click(checkbox)

  expect(budgetLimitInput).toBeDisabled()
  expect(budgetLimitInput).toHaveValue("")
})
