import Button from "components/Button"
import { render, screen } from "@testing-library/react"

test("Button renders desired content", () => {
  render(
    <Button appearance='primary' onClick={vi.fn()}>
      Accept
    </Button>
  )

  expect(screen.getByRole("button")).toHaveTextContent(/accept/i)
})

test("Disable button state", () => {
  render(
    <Button appearance='primary' onClick={vi.fn()} disabled>
      Accetpt
    </Button>
  )

  expect(screen.getByRole("button")).toBeDisabled()
})
