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
          price.usdPrice = c2.format(price.usdPrice);
          const { value, decimals, symbol } = price.nativePrice;
          price.nativePrice = tokenValueTxt(value, decimals, symbol);
          setTokenPrice(price);
        })
        .catch((e) => alert(e.message));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInitialized]);

  const fetchTokenPrice = async (options) => {
    const { chain, address } = options;
    return await token
      .getTokenPrice({chain: "eth", address: "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984"})
      .then((result) => result)
      .catch((e) => alert(e.message));
  };
  return { fetchTokenPrice, tokenPrice };
};

export default useChkPrice;