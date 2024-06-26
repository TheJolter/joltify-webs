export const params = {
  minter: process.env.NEXT_PUBLIC_MINTER_NOBLE, // to receive minting fee
  targetChains: [
    {
      chainName: 'Ethereum',
      fee: process.env.NEXT_PUBLIC_ENV==='DEV'?'1':'20000000', // gas fee eg: https://etherscan.io/tx/0x499731e953c645b7fd77092943de16202a781ca38dd3031b854f586b8f789625
      time: "13 minutes",
      domain: 0 // https://developers.circle.com/stablecoins/docs/supported-domains
    },
    {
      chainName: 'Avalanche',
      fee: process.env.NEXT_PUBLIC_ENV==='DEV'?'1':'1000000', // can not access location.hostname on server
      time: "20 seconds",
      domain: 1, 
    },
    {
      chainName: 'Arbitrum',
      fee: process.env.NEXT_PUBLIC_ENV==='DEV'?'1':'1000000',
      time: "13 minutes",
      domain: 3 
    }
  ]
}