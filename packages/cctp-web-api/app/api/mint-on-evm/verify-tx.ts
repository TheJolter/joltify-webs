import type { txExample as TX } from "../test/noble-tx-analysis/tx";
import { params } from "../params/config";
import { Coin } from "@cosmjs/stargate"
import { bn } from "utils";

export const verifyTx = (tx: (typeof TX) ): {
  code: number,
  message: string,
  destination_domain?: number
} => { 
  const code = tx.tx_response?.code // 0 is success
  if (code !== 0) return {code: 1, message: `tx code ${code}`}

  const msgs = tx.tx?.body?.messages
  if (!msgs) return {code: 2, message: `no msgs found`}

  const msgDepositForBurn = msgs.find(msg=>msg["@type"] === '/circle.cctp.v1.MsgDepositForBurn')
  if (!msgDepositForBurn) return {code: 5, message: `no msgDepositForBurn found`}

  const msgSend = msgs.find(msg=>msg["@type"] === '/cosmos.bank.v1beta1.MsgSend')
  if (!msgSend) return {code: 3, message: `no msgSend found`}
  if (msgSend.to_address!==params.minter) return {code: 7, message: `msgSend.to_address not minter`}
  if ((msgSend.amount[0] as Coin)?.denom !== 'uusdc') return {code: 4, message: `no usdc msgSend found`}
  
  const destination_domain = msgDepositForBurn?.destination_domain
  const targetChainInfo = params.targetChains.find(chain=>chain.domain === destination_domain)
  if (!targetChainInfo) return {code: 6, message: `no targetChainInfo found`, destination_domain}
  
  const amount = (msgSend.amount?.[0] as Coin).amount
  if (bn(amount).lt(targetChainInfo.fee||Infinity)) return {code: 6, message: `mint fee not enough`}

  return {code: 0, message: `success`, destination_domain}
}