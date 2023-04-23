import { ChangeEventHandler } from "react"
import { Input } from "./styles"

type TextInputProps = {
  value: string
  onChange: ChangeEventHandler<HTMLInputElement>
  placeholder: string
  pattern?: string
}

const TextInput = ({
  value,
  onChange,
  placeholder,
  pattern,
}: TextInputProps) => {
  return (
    <Input
      type='text'
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      pattern={pattern}
    />
  )
}

export default TextInput
