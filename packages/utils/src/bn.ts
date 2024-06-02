import BigNumber from "bignumber.js"

export const bn = (value: BigNumber.Value) => {
  return new BigNumber(value)
}

export default function bigNumberFloor(num: BigNumber.Value, decimals: number): BigNumber {
  return bn(num).times(10**decimals).idiv(1).div(10**decimals)
}

export function bigNumberCeil(num: BigNumber.Value, decimals: number): BigNumber {
  return bn(num).times(10**decimals).integerValue(BigNumber.ROUND_CEIL).div(10**decimals)
}