import { ComponentProps, ForwardedRef } from "react"
import { CustomButton } from "./styles"

type ButtonProps = {
  appearance: "primary" | "secondary" | "tertiary"
  variantColor?: boolean
  // this casting solves a typing conflict between native and styled ref type
  ref?: ForwardedRef<HTMLButtonElement>
} & ComponentProps<"button">

const Button = (props: ButtonProps) => {
  const { variantColor, disabled, appearance, children } = props

  const buttonColor = variantColor ? "#8CC7A1" : "#002E5C"
  const primaryButtonTextColor = variantColor ? "black" : "white"

  const buttonStyles = {
    primary: {
      background: disabled ? "#dfdfdf" : buttonColor,
      border: "inherit",
      color: disabled ? "#a2a2a2" : primaryButtonTextColor,
    },
    secondary: {
      background: "transparent",
      border: `solid 2px ${disabled ? "#dfdfdf" : buttonColor}`,
      color: disabled ? "#a2a2a2" : "black",
    },
    tertiary: {
      background: "transparent",
      border: "none",
      color: "black",
    },
  }

  return (
    <CustomButton {...props} style={buttonStyles[appearance]}>
      {children}
    </CustomButton>
  )
}

export default Button
