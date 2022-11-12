import { CustomButton } from "./styles"

export enum ButtonAppearance {
  Primary,
  Secondary,
  Tertiary,
}

type ButtonProps = {
  appearance: ButtonAppearance
  onClick: () => void
  variantColor?: boolean
  disabled?: boolean
  className?: string
  ariaLabel?: string
}

const Button: React.FC<ButtonProps> = ({
  appearance,
  variantColor,
  onClick,
  disabled,
  children,
  className,
  ariaLabel,
  const buttonColor = variantColor ? "#8CC7A1" : "#002E5C"
  const primaryButtonTextColor = variantColor ? "black" : "white"

  const styles = {
    0: {
      background: disabled ? "#dfdfdf" : buttonColor,
      border: "inherit",
      color: disabled ? "#a2a2a2" : primaryButtonTextColor,
    },
    1: {
      background: "transparent",
      border: `solid 2px ${disabled ? "#dfdfdf" : buttonColor}`,
      color: disabled ? "#a2a2a2" : "black",
    },
    2: {
      background: "transparent",
      border: "none",
      color: "black",
    },
  }

  return (
    <CustomButton
      className={className}
      onClick={onClick}
      {...styles[appearance]}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </CustomButton>
  )
}

export default Button
