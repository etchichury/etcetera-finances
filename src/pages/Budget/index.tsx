import Button, { ButtonStyle } from "src/components/Button";

const Budget = () => {
  return (
    <div style={{ padding: "400px" }}>
      <Button
        style={ButtonStyle.Primary}
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
        onClick={() => {
          console.log("Accept");
        }}
        width={150}
        height={50}
        disabled
      >
        Accept
      </Button>
    </div>
  );
};

export default Budget;
