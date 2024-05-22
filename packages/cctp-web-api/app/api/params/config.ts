export const params = {
  minter: process.env.MINTER_NOBLE, // to receive minting fee
  targetChains: [
    {
      chainName: 'Ethereum',
      fee: '10000000', // uusdc in noble
      time: "13 minutes",
      domain: 0 // https://developers.circle.com/stablecoins/docs/supported-domains
    },
    {
      chainName: 'Avalanche',
      fee: '1000000',
      time: "20 seconds",
      domain: 1, 
    },
    {
      chainName: 'Arbitrum',
      fee: '1000000',
      time: "13 minutes",
      domain: 3 
    }
  ]
}