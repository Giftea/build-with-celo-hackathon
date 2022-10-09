import React from "react";
import { useCelo } from "@celo/react-celo";
import { truncateAddress } from "@/utils";
import { Tag, TagLabel , TagCloseButton} from "@chakra-ui/react";

const HeaderOne = () => {
  const { address, network, connect, destroy } = useCelo();

  return (
    <div className="px-14 py-3 md:flex items-center justify-between hidden">
      <p className="text-sm">Buy $SAVEH token on Ubeswap</p>
      {!address && <button className="bg-primary text-sm py-2 px-5 rounded-3xl">Connect Wallet</button>}
      {address && (
        <Tag size="lg" borderRadius="full" variant="outline">
          <TagLabel>{truncateAddress(address)}</TagLabel>
          <TagCloseButton onClick={destroy} />
        </Tag>
      )}
    </div>
  );
};

export default HeaderOne;
