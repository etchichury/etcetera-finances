import { ComponentProps, ForwardedRef } from "react"
import { Input } from "./styles"

type TextInputProps = {
  label: string
  ref?: ForwardedRef<HTMLInputElement>
} & ComponentProps<"input">

const TextInput = (props: TextInputProps) => {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <Input
        type='text'
        placeholder={props.label}
        aria-label={props.label}
        {...props}
      />
    </div>
  )
}

export default TextInput
