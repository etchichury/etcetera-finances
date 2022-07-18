import Button, { ButtonStyle } from "src/components/Button";

const Budget = () => {
  return (
    <div style={{ padding: "400px" }}>
      <Button
        style={ButtonStyle.Primary}
        onClick={() => {
          console.log("Accept");
        }}
      >
        Accept
      </Button>
      <Button
        style={ButtonStyle.Secondary}
        onClick={() => {
          console.log("Cancel");
        }}
      >
        Cancel
      </Button>
      <Button
        style={ButtonStyle.Primary}
        onClick={() => {
          console.log("Accept");
        }}
        disabled
      >
        Accept
      </Button>
    </div>
  );
};

export default Budget;
