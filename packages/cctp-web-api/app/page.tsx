'use client'

import EvmToJolyify from "@/components/CrossChain/EvmToJoltify/EvmToJoltify";
import EvmToNoble from "@/components/CrossChain/EvmToNoble/EvmToNoble";
import JoltifyToEvm from "@/components/CrossChain/JoltifyToEvm/JoltifyToEvm";
import NobleToEvm from "@/components/CrossChain/NobleToEvm/NobleToEvm";
import BetweenCosmos from "@/components/CrossChain/BetweenCosmos/BetweenCosmos";
import {Select, SelectItem, Input} from "@nextui-org/react";
import { chains, Chain } from "@/config/chains";
import { observer } from "mobx-react-lite";
import { useStore } from "@/stores/hooks";
import { useEffect } from "react";
import { ChangeEvent } from "react";
import {useState} from "react";
import { bn } from "utils";
import isCosmosAddress from "@/utils/isCosmosAddress";
import { ethers } from "ethers";
import { nobleFee } from "@/config";
import { params } from "./api/params/config";
import cosmosAddrConvertor from "@/utils/cosmosAddrConvertor";

export default observer(function Home() {
  const inputStore = useStore('inputStore')
  const cosmosWalletStore = useStore('cosmosWalletStore')
  const evmWalletStore = useStore('evmWalletStore')
  const [errMsgDestAddr, setErrMsgDestAddr] = useState<string>()
  const [errMsgAmount, setErrMsgAmount] = useState<string>()
  const [sourceChain, setSourceChain] = useState<Chain>()
  const [targetChain, setTargetChain] = useState<Chain>()

  useEffect(() => {
    const sourceChain = chains.find((chain) => chain.chainID === inputStore.sourceChainID)
    setSourceChain(sourceChain)
    if (sourceChain?.chainType==='evm' && targetChain?.chainType==='evm') {
      inputStore.setTargetChainID(chains.find((chain) => chain.chainType==='cosmos')!.chainID)
    }
  }, [inputStore.sourceChainID])

  useEffect(() => {
    const targetChain = chains.find((chain) => chain.chainID === inputStore.targetChainID)
    setTargetChain(targetChain)
    if (sourceChain?.chainType==='evm' && targetChain?.chainType==='evm') {
      inputStore.setSourceChainID(chains.find((chain) => chain.chainType==='cosmos')!.chainID)
    }
    if (targetChain?.chainType==='evm') {
      inputStore.setTargetAddress(evmWalletStore.address??'')
    } else if (targetChain?.chainType==='cosmos' && cosmosWalletStore.address) {
      const address = cosmosAddrConvertor(cosmosWalletStore.address, targetChain.prefix!)
      inputStore.setTargetAddress(address)
    }
  }, [inputStore.targetChainID])

  useEffect(() => {
    setErrMsgDestAddr(undefined)
    const address = inputStore.targetAddress
    if (!address) return
    if (targetChain?.chainType==='evm' && !ethers.isAddress(address)) {
      setErrMsgDestAddr(`Invalid ${targetChain.chainName} address`)
    }
    if (targetChain?.chainType==='cosmos' && !isCosmosAddress({address, prefix: targetChain.prefix!})) {
      setErrMsgDestAddr(`Invalid ${targetChain.chainName} address, should start with ${targetChain.prefix}`)
    }
  }, [inputStore.targetAddress, targetChain?.chainID])

  useEffect(() => {
    const amount = inputStore.amount
    if (!amount) return
    let minAmount = bn(nobleFee)
    if (targetChain?.chainType==='evm') {
      const param = params.targetChains.find((item) => item.domain === targetChain.domain)
      minAmount = minAmount.plus( bn(param?.fee||Infinity).div(10**6) )
    }
    setErrMsgAmount(undefined)
    if (bn(amount).lte(minAmount)) {
      setErrMsgAmount(`Amount must be greater than ${minAmount}`)
    }
  }, [inputStore.amount, targetChain?.chainID])

  const handleTargetAddressChange = (e: ChangeEvent<HTMLInputElement>) => {
    inputStore.setTargetAddress(e.target.value)
  }

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (! /^\d?(\d+[\.]?\d*)?$/.test(e.target.value) ) return
    const amount = e.target.value
    inputStore.setAmount(amount)
  }

  const handleSourceChainChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const prevSourceChainID = inputStore.sourceChainID
    const sourceChainID = e.target.value
    inputStore.setSourceChainID(sourceChainID)
    if (sourceChainID===inputStore.targetChainID) {
      inputStore.setTargetChainID(prevSourceChainID)
    }
  }

  const handleTargetChainChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const prevTargetChainID = inputStore.targetChainID
    const targetChainID = e.target.value
    inputStore.setTargetChainID(targetChainID)
    if (inputStore.sourceChainID===targetChainID) {
      inputStore.setSourceChainID(prevTargetChainID)
    }
  }

  return (
    <section className="flex flex-col items-center justify-center h-full">
      <div className="w-full max-w-2xl">
        <div className="grid grid-cols-[1fr_60px_1fr]">
          <Select 
            label="Source Chain"
            selectedKeys={inputStore.sourceChainID?[inputStore.sourceChainID]:[]}
            onChange={handleSourceChainChange}
            disabledKeys={[inputStore.sourceChainID]}
          >
            {chains
            // .filter(item=>item.chainID!==inputStore.targetChainID)
            .map((chain) => {
              return <SelectItem key={chain.chainID}>{chain.chainName}</SelectItem>
            })}
          </Select>

          <div className="flex justify-center items-center font-bold text-2xl">{'->'}</div>

          <Select 
            label="Target Chain"
            selectedKeys={inputStore.targetChainID?[inputStore.targetChainID]:[]}
            onChange={handleTargetChainChange}
            disabledKeys={[inputStore.targetChainID]}
          >
            {chains
            // .filter(item=>item.chainID!==inputStore.sourceChainID)
            .map((chain) => {
              return <SelectItem key={chain.chainID}>{chain.chainName}</SelectItem>
            })}
          </Select>
        </div>

        <Input label="Destination Address" className="mt-8" value={inputStore.targetAddress} 
          onChange={handleTargetAddressChange}
          isInvalid={!!errMsgDestAddr}
          errorMessage={errMsgDestAddr}
          autoComplete="off"
        />

        <Input label="Amount" className="my-8" value={inputStore.amount}
          onChange={handleAmountChange}
          isInvalid={!!errMsgAmount}
          errorMessage={errMsgAmount}
          autoComplete="off"
        />

        { sourceChain?.chainType === 'evm' && inputStore.targetChainID === 'joltify_1729-1' &&
          <EvmToJolyify />
        }

        { sourceChain?.chainType === 'evm' && inputStore.targetChainID === 'noble-1' &&
          <EvmToNoble />
        }

        { inputStore.sourceChainID === 'joltify_1729-1' && targetChain?.chainType === 'evm' &&
          <JoltifyToEvm />
        }

        { inputStore.sourceChainID === 'noble-1' && targetChain?.chainType === 'evm' &&
          <NobleToEvm />
        }

        { sourceChain?.chainType==='cosmos' && targetChain?.chainType==='cosmos' &&
          <BetweenCosmos />
        }
      </div>
    </section>
  );
})