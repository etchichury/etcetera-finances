import { useState } from "react"
import { currencyMask } from "./masks"

const masks = {
  currency: currencyMask,
}

const useInputMask = (maskType: "currency", initialValue: string) => {
  const mask = masks[maskType]
  const [value, setValue] = useState(mask(initialValue))

  const onChangeMaskedInput = (value: string) => {
    setValue(mask(value))
  }

  return { value, setValue: onChangeMaskedInput }
}

export default useInputMask
