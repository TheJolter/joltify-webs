'use client'

import { useStore } from "@/stores/hooks";
import formatAddress from "@/utils/formatAddress";
import { Button } from "@nextui-org/react";
import { observer } from 'mobx-react-lite'
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/react";

export default observer(function EvmWalletButton() {
  const evmWalletStore = useStore('evmWalletStore')

  const handleConnect = async () => {
    const accounts = await (window as any).ethereum.request({ method: 'eth_requestAccounts' })
    const address = accounts[0]
    evmWalletStore.login(address)
  }

  const handleLogout = () => {
    evmWalletStore.logout()
  }

  if (evmWalletStore.address) {
    return (
      <Dropdown>
        <DropdownTrigger>
          <Button color="warning">
            {formatAddress(evmWalletStore.address)}
          </Button>
        </DropdownTrigger>
        <DropdownMenu>
          <DropdownItem onClick={handleLogout}>Logout</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    )
  } else {
    return (
      <Button color="warning" onClick={handleConnect}>
        Connect Metamask
      </Button>
    )
  }
})