import { action, makeObservable, observable } from "mobx";

export default class BalanceStore {
  constructor() {
    makeObservable(this)
  }

  @observable
  usdcBalance: Record<string, string> = {} // ky: `${chainID}-${address}`

  @action
  addUsdcBalance({chainID, address, balance}:{chainID: string, address: string, balance: string}) {
    this.usdcBalance[`${chainID}-${address}`] = balance
  }

  getUsdcBalance(chainID: string|undefined, address: string|undefined) {
    return this.usdcBalance[`${chainID}-${address}`] ?? '0'
  }
}