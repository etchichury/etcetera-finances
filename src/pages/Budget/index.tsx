import Button, { ButtonStyle, ButtonColor } from "src/components/Button";

const Budget = () => {
  return (
    <div style={{ padding: "400px" }}>
      <Button
        style={ButtonStyle.Primary}
        color={ButtonColor.Blue}
        onClick={() => {
          console.log("Accept");
        }}
      >
        Accept
      </Button>
      <Button
        style={ButtonStyle.Primary}
        color={ButtonColor.Green}
        onClick={() => {
          console.log("Accept");
        }}
      >
        Accept
      </Button>
      <Button
        style={ButtonStyle.Secondary}
        color={ButtonColor.Blue}
        onClick={() => {
          console.log("Cancel");
        }}
      >
        Cancel
      </Button>
      <Button
        style={ButtonStyle.Primary}
        color={ButtonColor.Blue}
        onClick={() => {
          console.log("Accept");
        }}
        disabled
      >
        Accept
      </Button>
      <Button
        style={ButtonStyle.Secondary}
        color={ButtonColor.Blue}
        onClick={() => {
          console.log("Accept");
        }}
        disabled
      >
        Cancel
      </Button>
    </div>
  );
};

export default Budget;
