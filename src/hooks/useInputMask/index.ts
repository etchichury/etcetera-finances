import { ChangeEvent, useState } from "react"
import { currencyMask } from "./masks"

const masks = {
  currency: currencyMask,
}

const useInputMask = (maskType: "currency", initialValue: string) => {
  const mask = masks[maskType]
  const [value, setValue] = useState(mask(initialValue))

  const onChangeMaskedInput = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(mask(event.target.value))
  }

  return { value, onChangeValue: onChangeMaskedInput }
}

export default useInputMask
