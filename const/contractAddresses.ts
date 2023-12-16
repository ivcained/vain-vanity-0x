/** Replace the values below with the addresses of your smart contracts. */

// 1. Set up the network your smart contracts are deployed to.
// First, import the chain from the package, then set the NETWORK variable to the chain.
import { Mumbai, Optimism } from "@thirdweb-dev/chains";
export const NETWORK = Optimism;

// 2. The address of the Vain smart contract.
// Contracts here:
export const MARKETPLACE_ADDRESS = "0x83c57ec0dF015eef8401fFb7CB7f66CfA8b6Ff55";

// 3. The address of your NFT collection smart contract.
export const NFT_COLLECTION_ADDRESS =
  "0x67b40fC017863743C520cDAec1B367BE1FD721f0";

// URL of where users can view transactions on
// Mumbai testnet and OP Mainnet
//export const ETHERSCAN_URL = "https://mumbai.polygonscan.com";
// Optimism Scan.
export const ETHERSCAN_URL = "https://optimistic.etherscan.io/";
