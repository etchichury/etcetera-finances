import { CustomButton } from "./styles";

export enum ButtonStyle {
  Primary,
  Secondary,
}

export enum ButtonColor {
  Blue,
  Green,
}

type ButtonProps = {
  style: ButtonStyle;
  color: ButtonColor;
  onClick: () => void;
  disabled?: boolean;
};

//TODO: instead of color prop, I should  use a boolean
// flag to denote the variant color
const Button: React.FC<ButtonProps> = ({
  style,
  color,
  onClick,
  disabled,
  children,
}) => {
  const colors = {
    0: "#002E5C",
    1: "#8CC7A1",
  };

  const primaryButtonTextColor =
    color === ButtonColor.Blue ? "white" : "#002E5C";

  const styles = {
    0: {
      background: disabled ? "#d0d0d0" : colors[color],
      border: "inherit",
      color: disabled ? "#4d4d4d" : primaryButtonTextColor,
    },
    1: {
      background: "transparent",
      border: `solid 4px ${disabled ? "#d0d0d0" : colors[color]}`,
      color: "#002E5C",
    },
  };

  return (
    <CustomButton onClick={onClick} {...styles[style]} disabled={disabled}>
      {children}
    </CustomButton>
  );
};

export default Button;
