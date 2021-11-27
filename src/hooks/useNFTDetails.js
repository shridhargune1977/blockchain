import { useMoralisDapp } from "providers/MoralisDappProvider/MoralisDappProvider";
import { useEffect, useState } from "react";
import { useMoralisWeb3Api, useMoralisWeb3ApiCall } from "react-moralis";
import { useIPFS } from "./useIPFS";
import { useMoralis } from "react-moralis";

export const useNFTDetails = (options) => {
  const { account } = useMoralisWeb3Api();
  const { chainId } = useMoralisDapp();
  const { resolveLink } = useIPFS();
  const { Moralis } = useMoralis();
  const [NFTDetail, setNFTDetails] = useState([]);
  const { token } = useMoralisWeb3Api();
  const { isInitialized } = useMoralis();
  useEffect(() => {
    if (isInitialized) {
        Moralis.initPlugins();
    }
    // eslint-disable-next-line
}, []);
  useEffect(() => {
    if (isInitialized)
      fetchNFTDetails(options)
        .then((data) => {
            setNFTDetails(data);
        })
        .catch((e) => alert(e.message));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInitialized]);

  const fetchNFTDetails = async (params) => {
    try {
        console.log("get nft details" + params);
    const data = await Moralis.Plugins.opensea.getAsset({
        network: 'testnet',
  tokenAddress: '0xdbe8143c3996c87ecd639ebba5d13b84f56855c2',
  tokenId: '0',
        /*network: params.chain,
        tokenAddress: params.tokenAddress,
        tokenId: params.tokenId,*/
      });
      setNFTDetails(data);
      console.log("nft data: " + data);
    
    }
    catch (e) {
        NFTDetail = 'Not Available';
    }
    return NFTDetail;
    };
}
export default useNFTDetails;