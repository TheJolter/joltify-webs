'use client'

import React from "react";
import CosmosWalletStore from "./CosmosWalletStore";
import EvmWalletStore from "./EvmWalletStore";

export const stores = Object.freeze({
  cosmosWalletStore: new CosmosWalletStore(),
  evmWalletStore: new EvmWalletStore()
})

export const storesContext = React.createContext(stores);
export const StoresProvider = storesContext.Provider;