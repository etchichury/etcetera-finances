type CheckboxProps = {
  checkboxId: string
  label: string
}

const Checkbox = ({ checkboxId, label }: CheckboxProps) => {
  return (
    <div>
      <input type='checkbox' id={checkboxId}>
        <label htmlFor={checkboxId}>{label}</label>
      </input>
    </div>
  )
}

export default Checkbox
