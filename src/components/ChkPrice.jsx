import React, { useState } from "react";
import useChkPrice from "hooks/useChkPrice";
import { useMoralis } from "react-moralis";

const styles = {
  token: {
    padding: "0 7px",
    height: "42px",
    gap: "5px",
    width: "fit-content",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    whiteSpace: "nowrap",
  },
};


function ChkPrice(props) {
  const { Moralis } = useMoralis();

  let web3 = Moralis.Web3.enable();

  let contractAbi = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"}];
  let contract = new web3.eth.Contract([{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"string","name":"_coin","type":"string"}],"name":"getLatestPrice","outputs":[{"internalType":"int256","name":"","type":"int256"},{"internalType":"int8","name":"","type":"int8"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}],
     "0x9394d17CbD1081304FEc7061906673917680b22A");
  
     let output = contract.methods.getLatestPrice("matic").call();
  console.log(output)
  let time=new Date(parseInt(output[2])*1000);
  let price=parseInt(output[0]);
  let multiplier = 10**parseInt(output[1]);
  let out=price/multiplier;
  var disp="$"+out;

  const { chkPrice } = useChkPrice(props);
  const [isUSDMode, setIsUSDMode] = useState(true);

  const toggleDisplayStyle = () => setIsUSDMode(isUSDMode ? false : true);

  const noLogoToken = "https://etherscan.io/images/main/empty-token.png";

  
  return (
    <div style={styles.token}>
      <img src={props.image || noLogoToken} alt="logo" style={{ height: props?.size || "35px" }} />
      <span
        style={{ cursor: "pointer" }}
        onClick={toggleDisplayStyle}
        title={`Show in ${isUSDMode ? "ETH" : "USD"}`}
      >
        {chkPrice && (isUSDMode ? chkPrice.usdPrice : chkPrice.nativePrice)}
      </span>
    </div>
  );
}

export default ChkPrice;
