import { useMoralisDapp } from "providers/MoralisDappProvider/MoralisDappProvider";
import { useEffect, useState } from "react";
import { useMoralis, useMoralisWeb3Api, useMoralisWeb3ApiCall } from "react-moralis";
import { useIPFS } from "./useIPFS";
import { openseaConfig } from "helpers/openseaConfig";
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
export const useNFTBalance = (options) => {
  const { Moralis } = useMoralis();
  const { account } = useMoralisWeb3Api();
  const { chainId, walletAddress } = useMoralisDapp();
  const { resolveLink } = useIPFS();
  const [NFTBalance, setNFTBalance] = useState([]);
  const [NFTBalanceSell, setNFTBalanceSell] = useState([]);
  const [result] = useState([]);
  const {
    fetch: getNFTBalance,
    data,
    error,
    isLoading,
  } = useMoralisWeb3ApiCall(account.getNFTs, { chain: chainId, address: walletAddress });

  useEffect(() => {
    const getAsset = async (tokenAddress, tokenId) => {
      if (Moralis.Plugins) {
        await Moralis.Plugins.opensea.getAsset({
          network: openseaConfig.network,
          tokenAddress: tokenAddress,
          tokenId: tokenId,
        }).then((res) => {
          result.push(res);
          setNFTBalanceSell(result);
        }).catch((e) => {
          console.error(e.message)
        });
      }
    };

    if (data?.result) {
      const NFTs = data.result;
      for (let NFT of NFTs) {
        if (NFT?.metadata && typeof NFT?.metadata === 'string') {
          NFT.metadata = JSON.parse(NFT?.metadata);
          NFT.image = resolveLink(NFT.metadata?.image);
        }
      }
      setNFTBalance(NFTs);
    }

    if(NFTBalanceSell.length === 0) {
      openseaConfig.nfts.forEach((nft,index) =>
          getAsset(nft.tokenAddress, nft.tokenId).then(sleep(index * 1000))
      )
    }
  }, [NFTBalance, openseaConfig, Moralis, result, data, NFTBalanceSell]);

  return { getNFTBalance, NFTBalance, error, isLoading, NFTBalanceSell };
};
