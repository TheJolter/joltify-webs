import BigNumber from "bignumber.js"

export const bn = (value: BigNumber.Value) => {
  return new BigNumber(value)
}