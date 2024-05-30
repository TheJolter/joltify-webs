export type Chain = {
  chainID: string;
  chainName: string;
  rpc: string;
  domain: number;
  usdcAddress: string;
  logo?: string;
  chainType: 'evm',
  tokenType: 'erc20',
} | {
  chainID: string;
  chainName: string;
  rpc: string;
  lcd: string;
  domain: number;
  usdcAddress: string;
  logo?: string;
  chainType: 'cosmos',
  tokenType: 'native' | 'ibc',
  prefix: string;
}

export const chains:Chain[] = [
  {
    chainID: '0x1',
    chainName: 'Ethereum',
    rpc: 'https://rpc.ankr.com/eth',
    domain: 0,
    usdcAddress: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    chainType: 'evm',
    tokenType: 'erc20',
  },
  {
    chainID: '0xa86a',
    chainName: 'Avalanche',
    rpc: 'https://api.avax.network/ext/bc/C/rpc',
    domain: 1,
    usdcAddress: '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E',
    chainType: 'evm',
    tokenType: 'erc20',
  },
  {
    chainID: '0xa61',
    chainName: 'Arbitrum',
    rpc: 'https://arb1.arbitrum.io/rpc',
    domain: 3,
    usdcAddress: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
    chainType: 'evm',
    tokenType: 'erc20',
  },
  {
    chainID: 'joltify_1729-1',
    chainName: 'Joltify',
    rpc: 'https://rpc.joltify.io',
    lcd: 'https://lcd.joltify.io',
    domain: -1, //
    usdcAddress: 'ibc/65D0BEC6DAD96C7F5043D1E54E54B6BB5D5B3AEC3FF6CEBB75B9E059F3580EA3',
    chainType: 'cosmos',
    tokenType: 'ibc',
    prefix: 'jolt',
  },
  {
    chainID: 'noble-1',
    chainName: 'Noble',
    rpc: 'https://rpc.noble.strange.love',
    lcd: 'https://lcd.noble.strange.love/swagger',
    domain: 4,
    usdcAddress: 'uusdc',
    chainType: 'cosmos',
    tokenType: 'native',
    prefix: 'noble',
  },
]