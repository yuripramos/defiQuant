export const ONCHAIN_URL =
  "https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3";

export const QUANT_URL = `https://api.taapi.io/bulk`;

export const query = `
{
  pools(orderBy:volumeUSD, orderDirection:desc, first:20) {
    id
    volumeUSD
    feeTier
    feesUSD
    liquidity
    totalValueLockedUSD
    totalValueLockedToken0
    totalValueLockedToken1
    volumeToken0
    volumeToken1
    token0{
      symbol
    }
    token1 {
      symbol
    }
  }
}
`;
