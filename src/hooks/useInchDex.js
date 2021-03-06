import { useState } from "react";
import { useMoralis } from "react-moralis";
import { useMoralisDapp } from "providers/MoralisDappProvider/MoralisDappProvider";

const useInchDex = () => {
  const { Moralis } = useMoralis();
  const { walletAddress } = useMoralisDapp();

  const [tokenList, setTokenlist] = useState();

  const getSupportedTokens = async (chain) =>
    await Moralis.Plugins.oneInch
      .getSupportedTokens({ chain })
      .then((tokens) => setTokenlist(tokens.tokens)
      );      
    
  const getQuote = async (params) =>
    await Moralis.Plugins.oneInch.quote({
      chain: params.chain, // The blockchain you want to use (eth/bsc/polygon)
      fromTokenAddress: params.fromToken.address, // The token you want to swap
      toTokenAddress: params.toToken.address, // The token you want to receive
      amount: Moralis.Units.Token(params.fromAmount, params.fromToken.decimals).toString(),
    });

  async function trySwap(params) {    
    console.log("swap params:" +JSON.stringify(params));
    const { fromToken, fromAmount, chain } = params;
    const amount = Moralis.Units.Token(fromAmount, fromToken.decimals).toString();
    if (fromToken.address !== "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee") {
      await Moralis.Plugins.oneInch
        .hasAllowance({
          chain, // The blockchain you want to use (eth/bsc/polygon)
          fromTokenAddress: fromToken.address, // The token you want to swap
          fromAddress: walletAddress, // Your wallet address
          amount,
        })
        .then(async (allowance) => {
          console.log(allowance);
          if (!allowance) {
            await Moralis.Plugins.oneInch.approve({
              chain, // The blockchain you want to use (eth/bsc/polygon)
              tokenAddress: fromToken.address, // The token you want to swap
              fromAddress: walletAddress, // Your wallet address
            });
          }
        })
        .catch((e) => console.log("Approve error :" + e.message));
    }

    await doSwap(params)
      .then((receipt) => {        
        if (receipt.statusCode !== 400) {
          console.log("Swap Complete");
        }
        console.log(receipt);
      })
      .catch((e) => console.log("swap error:" + e.message));
  }

  async function doSwap(params) {
    return await Moralis.Plugins.oneInch.swap({
      chain: params.chain, // The blockchain you want to use (eth/bsc/polygon)
      fromTokenAddress: params.fromToken.address, // The token you want to swap
      toTokenAddress: params.toToken.address, // The token you want to receive
      amount: params.fromAmount,
      fromAddress: walletAddress, // Your wallet address
      slippage: 1,
    });
  }

  return { getSupportedTokens, getQuote, trySwap, tokenList };
};

export default useInchDex;
