export const ONCHAIN_URL_ETHEREUM =
  "https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3";

export const ONCHAIN_URL_POLYGON =
  "https://api.thegraph.com/subgraphs/name/ianlapham/uniswap-v3-polygon";

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
