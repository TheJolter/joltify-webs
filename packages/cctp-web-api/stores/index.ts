'use client'

import React from "react";
import CosmosWalletStore from "./CosmosWalletStore";
import EvmWalletStore from "./EvmWalletStore";
import InputStore from "./InputStore";

export const stores = Object.freeze({
  cosmosWalletStore: new CosmosWalletStore(),
  evmWalletStore: new EvmWalletStore(),
  inputStore: new InputStore(),
})

export const storesContext = React.createContext(stores);
export const StoresProvider = storesContext.Provider;