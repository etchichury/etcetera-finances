import { ComponentProps, ForwardedRef, forwardRef } from "react"
import { CustomCheckbox } from "./styles"

type CheckboxProps = {
  label: string
  ref?: ForwardedRef<HTMLInputElement>
} & ComponentProps<"input">

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  return (
    <div>
      <CustomCheckbox type='checkbox' id={props.id} ref={ref} {...props} />
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  )
})

export default Checkbox
