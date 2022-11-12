import Button, { ButtonAppearance } from "src/components/Button"
import { render, screen } from "@testing-library/react"

test("Button renders desired content", () => {
  render(
    <Button appearance={ButtonAppearance.Primary} onClick={jest.fn()}>
      Accept
    </Button>
  )

  expect(screen.getByRole("button")).toHaveTextContent(/accept/i)
})

test("Disable button state", () => {
  render(
    <Button appearance={ButtonAppearance.Primary} onClick={jest.fn()} disabled>
      Accetpt
    </Button>
  )

  expect(screen.getByRole("button")).toBeDisabled()
})
