import { useContract, useNFTs } from "@thirdweb-dev/react";
import React from "react";
import Container from "../components/Container/Container";
import NFTGrid from "../components/NFT/NFTGrid";
import { NFT_COLLECTION_ADDRESS } from "../const/contractAddresses";

export default function Buy() {
  // Load all of the bounties from the bounty Collection
  const { contract } = useContract(NFT_COLLECTION_ADDRESS);
  const { data, isLoading } = useNFTs(contract);

  return (
    <Container maxWidth="lg">
      <h1>Create Bounty</h1>
      <p>Set your bounty for the vanity you need. Coming Soon!</p>
      <NFTGrid
        data={data}
        isLoading={isLoading}
        emptyText={
          "Looks like there are no bounties in this collection. Did you import your contract?"
        }
      />
    </Container>
  );
}
