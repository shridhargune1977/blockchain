import { useEffect, useState } from "react";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";
import { c2, tokenValueTxt } from "../helpers/formatters";

const useChkPrice = (options) => {
  const { token } = useMoralisWeb3Api();
  const { isInitialized } = useMoralis();
  const [tokenPrice, setTokenPrice] = useState();

  useEffect(() => {
    if (isInitialized)
      fetchTokenPrice(options)
        .then((price) => {
          /*price.usdPrice = c2.format(price.usdPrice);
          const { value, decimals, symbol } = price.nativePrice;
          price.nativePrice = tokenValueTxt(value, decimals, symbol);*/
         // console.log(price)
          setTokenPrice(price);
        })
        .catch((e) => alert(e.message));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInitialized]);
  const { Moralis } = useMoralis();

  const fetchTokenPrice = async (options) => {
    const { chain, address } = options;
   // console.log(address);
    const aggregatorV3InterfaceABI =
      [{
        "inputs": [],
        "name": "decimals",
        "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }],
        "stateMutability": "view", "type": "function"
      },
        {
          "inputs": [],
          "name": "description",
          "outputs": [{ "internalType": "string", "name": "", "type": "string" }],
          "stateMutability": "view", "type": "function"
        },
        {
          "inputs": [
            { "internalType": "uint80", "name": "_roundId", "type": "uint80" }],
          "name": "getRoundData",
          "outputs": [
            { "internalType": "uint80", "name": "roundId", "type": "uint80" },
            { "internalType": "int256", "name": "answer", "type": "int256" },
            { "internalType": "uint256", "name": "startedAt", "type": "uint256" },
            { "internalType": "uint256", "name": "updatedAt", "type": "uint256" },
            { "internalType": "uint80", "name": "answeredInRound", "type": "uint80" }],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "latestRoundData",
          "outputs": [
            { "internalType": "uint80", "name": "roundId", "type": "uint80" },
            { "internalType": "int256", "name": "answer", "type": "int256" },
            { "internalType": "uint256", "name": "startedAt", "type": "uint256" },
            { "internalType": "uint256", "name": "updatedAt", "type": "uint256" },
            { "internalType": "uint80", "name": "answeredInRound", "type": "uint80" }],
          "stateMutability": "view", "type": "function"
        },
        {
          "inputs": [],
          "name": "version",
          "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
          "stateMutability": "view",
          "type": "function"
        }]
    const options1 = {
      contractAddress: address,
      functionName: "latestRoundData",
      abi: aggregatorV3InterfaceABI,
      params: {
      }
    };
    let price1;
    try {
      
      const roundData = await Moralis.executeFunction(options1);
      // console.log("Latest Round Data", roundData);
      let time = new Date(parseInt(roundData[2]) * 1000);
       price1 = parseInt(roundData[1]);
      // console.log("disp", price1);
      //console.log("time", time);

      /*const { chain, address } = options;
      return await token
        .getTokenPrice({chain: "eth", address: "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984"})
        .then((result) => result)
        .catch((e) => alert(e.message));*/
    }
    catch (e) {
      price1 = 'Not Available';
    }
      return price1;
    
  };
  //return { fetchTokenPrice, tokenPrice };
  return tokenPrice;
};

export default useChkPrice;