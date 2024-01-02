import { useState } from "react";
import { useContract, useContractWrite } from "@thirdweb-dev/react";

interface BountyData {
  pubkey: string;
  custom: string;
  nLeading0s: number;
  flag: boolean;
  locked: boolean;
  amount: number;
}

export default function CreateBountyComponent() {
  const [bountyData, setBountyData] = useState<BountyData>({
    pubkey: "",
    custom: "",
    nLeading0s: 0,
    flag: false,
    locked: false,
    amount: 0,
  });

  const { contract } = useContract("0x000000000001F04A9533e92d7AD4dDe7DC19a8F3");
  const { mutateAsync: createBounty, isLoading } = useContractWrite(contract, "createBounty");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const data = await createBounty({ args: [bountyData.pubkey, bountyData.custom, bountyData.nLeading0s, bountyData.flag, bountyData.locked, bountyData.amount] });
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Pubkey:
        <input type="text" value={bountyData.pubkey} onChange={(e) => setBountyData({ ...bountyData, pubkey: e.target.value })} />
      </label>
      <br />
      <label>
        Custom:
        <input type="text" value={bountyData.custom} onChange={(e) => setBountyData({ ...bountyData, custom: e.target.value })} />
      </label>
      <br />
      <label>
        nLeading0s:
        <input type="number" value={bountyData.nLeading0s} onChange={(e) => setBountyData({ ...bountyData, nLeading0s: Number(e.target.value) })} />
      </label>
      <br />
      <label>
        Flag:
        <input type="checkbox" checked={bountyData.flag} onChange={(e) => setBountyData({ ...bountyData, flag: e.target.checked })} />
      </label>
      <br />
      <label>
        Locked:
        <input type="checkbox" checked={bountyData.locked} onChange={(e) => setBountyData({ ...bountyData, locked: e.target.checked })} />
      </label>
      <br />
      <label>
        Amount:
        <input type="number" value={bountyData.amount} onChange={(e) => setBountyData({ ...bountyData, amount: Number(e.target.value) })} />
      </label>
      <br />
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Creating Bounty..." : "Create Bounty"}
      </button>
    </form>
  );
}