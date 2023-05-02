import { CustomCheckbox } from "./styles"

type CheckboxProps = {
  checkboxId: string
  label: string
}

const Checkbox = ({ checkboxId, label }: CheckboxProps) => {
  return (
    <div>
      <CustomCheckbox type='checkbox' id={checkboxId} />
      <label htmlFor={checkboxId}>{label}</label>
    </div>
  )
}

export default Checkbox
