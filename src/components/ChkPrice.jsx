import React, { useState } from "react";
import useChkPrice from "hooks/useChkPrice";

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
  
  let chkPrice = '';
  
  chkPrice = useChkPrice(props);
  
    const [isUSDMode, setIsUSDMode] = useState(true);
    // console.log("chkPRice:" + chkPrice)
    const toggleDisplayStyle = () => setIsUSDMode(isUSDMode ? false : true);

    const noLogoToken = "https://etherscan.io/images/main/empty-token.png";
  
  return (
    <div style={styles.token}>
      <span>
        {chkPrice}
      </span>
    </div>
  );
}
export default ChkPrice;
