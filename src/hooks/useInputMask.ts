import { ChangeEvent, useState } from "react"

export const useInputMask = (style: string, initialValue: string) => {
  const [value, setValue] = useState(
    Intl.NumberFormat("pt-BR", {
      style: style,
      currency: "BRL",
    }).format(parseFloat(initialValue))
  )

  const onChangeMaskedInput = (event: ChangeEvent<HTMLInputElement>) => {
    let cleanValue = event.target.value.replace("R$", "").replace(".", "")

    if (cleanValue.length > 1) {
      const valueWithNoIntSeparator = cleanValue.replace(".", "")
      const valueWithCommaNeighborValueShifted =
        valueWithNoIntSeparator.replace(
          ",",
          valueWithNoIntSeparator[valueWithNoIntSeparator.length - 3]
        )
      const preDecimalValue = valueWithCommaNeighborValueShifted.substring(
        0,
        valueWithCommaNeighborValueShifted.length - 3
      )
      const postDecimalvalue = valueWithCommaNeighborValueShifted.substring(
        valueWithCommaNeighborValueShifted.length - 2
      )

      cleanValue = preDecimalValue + "." + postDecimalvalue
    } else {
      cleanValue = `0.${cleanValue}`
    }

    setValue(
      Intl.NumberFormat("pt-BR", { style: style, currency: "BRL" }).format(
        parseFloat(cleanValue)
      )
    )
  }

  return { value, onChangeMaskedInput }
}
