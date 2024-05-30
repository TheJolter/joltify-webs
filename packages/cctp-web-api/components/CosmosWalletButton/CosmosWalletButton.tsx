'use client'

import { useStore } from "@/stores/hooks";
import formatAddress from "@/utils/formatAddress";
import { Button } from "@nextui-org/react";
import { observer } from 'mobx-react-lite'
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/react";
import cosmosAddrConvertor from "@/utils/cosmosAddrConvertor";

export default observer(function CosmosWalletButton() {
  const cosmosWalletStore = useStore('cosmosWalletStore')

  const handleConnect = async () => {
    const keplr = (window as any).keplr
    await keplr.enable('joltify_1729-1')
    const offlineSigner = keplr.getOfflineSigner('joltify_1729-1')

    const accounts = await offlineSigner.getAccounts()
    const address = accounts[0].address
    cosmosWalletStore.login(address)
  }

  const handleLogout = () => {
    cosmosWalletStore.logout()
  }

  if (cosmosWalletStore.address) {
    return (
      <Dropdown>
        <DropdownTrigger>
          <Button color="primary">
            Keplr Connected
          </Button>
        </DropdownTrigger>
        <DropdownMenu>
          <DropdownItem>
            Joltify: {formatAddress(cosmosWalletStore.address)}
          </DropdownItem>
          <DropdownItem>
            Noble: {formatAddress(cosmosAddrConvertor(cosmosWalletStore.address, 'noble'))}
          </DropdownItem>
          <DropdownItem onClick={handleLogout}>Logout</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    )
  } else {
    return (
      <Button color="primary" onClick={handleConnect}>
        Connect Keplr
      </Button>
    )
  }
})