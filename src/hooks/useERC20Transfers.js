import { useEffect, useState } from "react";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";
import { useMoralisDapp } from "providers/MoralisDappProvider/MoralisDappProvider";

export const useERC20Transfers = () => {
  const { account } = useMoralisWeb3Api();
  const { walletAddress, chainId } = useMoralisDapp();
  const { isInitialized } = useMoralis();
  const [ERC20Transfers, setERC20Transfers] = useState();

  useEffect(() => {
    if (isInitialized)
      fetchERC20Transfers()
        .then((result) => setERC20Transfers(result))
        .catch((e) => alert(e.message));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInitialized, chainId, walletAddress]);

  const { Moralis } = useMoralis();

  const fetchERC20Transfers = async () => {

    const aggregatorV3InterfaceABI = [{ "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "description", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint80", "name": "_roundId", "type": "uint80" }], "name": "getRoundData", "outputs": [{ "internalType": "uint80", "name": "roundId", "type": "uint80" }, { "internalType": "int256", "name": "answer", "type": "int256" }, { "internalType": "uint256", "name": "startedAt", "type": "uint256" }, { "internalType": "uint256", "name": "updatedAt", "type": "uint256" }, { "internalType": "uint80", "name": "answeredInRound", "type": "uint80" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "latestRoundData", "outputs": [{ "internalType": "uint80", "name": "roundId", "type": "uint80" }, { "internalType": "int256", "name": "answer", "type": "int256" }, { "internalType": "uint256", "name": "startedAt", "type": "uint256" }, { "internalType": "uint256", "name": "updatedAt", "type": "uint256" }, { "internalType": "uint80", "name": "answeredInRound", "type": "uint80" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "version", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }]
    const options = {
      contractAddress: "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419",
      functionName: "latestRoundData",
      abi: aggregatorV3InterfaceABI,
      params: {
      }
    };
    
    const roundData = await Moralis.executeFunction(options); 
    console.log("Latest Round Data", roundData);

    return await account
      .getTokenTransfers({ address: walletAddress, chain: chainId })
      .then((result) => result.result)
      .catch((e) => alert(e.message));
  };
  return { fetchERC20Transfers, ERC20Transfers };
};
