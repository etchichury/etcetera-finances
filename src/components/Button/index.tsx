import { CustomButton } from "./styles";

export enum ButtonStyle {
  Primary,
  Secondary,
}

type ButtonProps = {
  style: ButtonStyle;
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ style, onClick, children} ) => {
  const styles = {
    0: {
      background: "#002E5C",
      border: "inherit",
      color: "white"
    },
    1: {
      background: "transparent",
      border: "solid 4px #002E5C",
      color: "#002E5C"
    },
  };

  return <CustomButton onClick={onClick} {...styles[style]}>
    {children}
    </CustomButton>;
};

export default Button;
