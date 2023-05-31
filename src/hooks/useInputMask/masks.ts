export const currencyMask = (targetValue: string, currency: string = "BRL") => {
  let cleanValue = targetValue.replace("R$", "").replace(".", "")

  if (cleanValue.length > 1) {
    const valueWithNoIntSeparator = cleanValue.replace(".", "")
    const valueWithCommaNeighborValueShifted = valueWithNoIntSeparator.replace(
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

  return Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency,
  }).format(parseFloat(cleanValue))
}
