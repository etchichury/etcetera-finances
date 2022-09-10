import { CustomButton } from "./styles"

export enum ButtonStyle {
  Primary,
  Secondary,
}

type ButtonProps = {
  style: ButtonStyle
  onClick: () => void
  variantColor?: boolean
  disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({
  style,
  variantColor,
  onClick,
  disabled,
  children,
}) => {
  const buttonColor = variantColor ? "#8CC7A1" : "#002E5C"
  const primaryButtonTextColor = variantColor ? "#002E5C" : "white"

  const styles = {
    0: {
      background: disabled ? "#dfdfdf" : buttonColor,
      border: "inherit",
      color: disabled ? "#a2a2a2" : primaryButtonTextColor,
    },
    1: {
      background: "transparent",
      border: `solid 3px ${disabled ? "#dfdfdf" : buttonColor}`,
      color: disabled ? "#a2a2a2" : "#002E5C",
    },
  }

  return (
    <CustomButton onClick={onClick} {...styles[style]} disabled={disabled}>
      {children}
    </CustomButton>
  )
}

export default Button
