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
        width={150}
        height={50}
      >
        Accept
      </Button>
      <Button
        style={ButtonStyle.Primary}
        color={ButtonColor.Green}
        onClick={() => {
          console.log("Accept");
        }}
        width={150}
        height={50}
      >
        Accept
      </Button>
      <Button
        style={ButtonStyle.Secondary}
        color={ButtonColor.Blue}
        onClick={() => {
          console.log("Cancel");
        }}
        width={150}
        height={50}
      >
        Cancel
      </Button>
      <Button
        style={ButtonStyle.Primary}
        color={ButtonColor.Blue}
        onClick={() => {
          console.log("Accept");
        }}
        width={150}
        height={50}
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
        width={150}
        height={50}
        disabled
      >
        Cancel
      </Button>
    </div>
  );
};

export default Budget;
