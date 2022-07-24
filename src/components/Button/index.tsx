import { CustomButton } from "./styles";

export enum ButtonStyle {
  Primary,
  Secondary,
}

type ButtonProps = {
  style: ButtonStyle;
  width: number;
  height: number;
  onClick: () => void;
  disabled?: boolean;
};

// TODO: dynamic color
const Button: React.FC<ButtonProps> = ({
  style,
  width,
  height,
  onClick,
  disabled,
  children,
}) => {
  const styles = {
    0: {
      background: disabled ? "#d0d0d0" : "#002E5C",
      border: "inherit",
      color: disabled ? "#4d4d4d" : "white",
    },
    1: {
      background: "transparent",
      border: "solid 4px #002E5C",
      color: "#002E5C",
    },
  };

  return (
    <CustomButton
      onClick={onClick}
      {...styles[style]}
      width={width}
      height={height}
      disabled={disabled}
    >
      {children}
    </CustomButton>
  );
};

export default Button;
