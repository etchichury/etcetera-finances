import Button, { ButtonColor, ButtonStyle } from "src/components/Button";
import { render, screen } from "@testing-library/react";

test("Button component rendering desired content", () => {
  render(
    <Button
      style={ButtonStyle.Primary}
      color={ButtonColor.Blue}
      width={100}
      height={100}
      onClick={jest.fn()}
    >
      Accept
    </Button>
  );

  expect(screen.getByRole("button")).toHaveTextContent(/accept/i);
});

test("Disable button state", () => {
  render(
    <Button
      style={ButtonStyle.Primary}
      color={ButtonColor.Blue}
      width={100}
      height={100}
      onClick={jest.fn()}
      disabled
    >
      Accetpt
    </Button>
  );

  expect(screen.getByRole("button")).toBeDisabled();
});
