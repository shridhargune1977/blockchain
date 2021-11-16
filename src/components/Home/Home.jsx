import React from "react";
//import { useMoralis } from "react-moralis";
import logoIcon from "assets/landing.png";

const styles = {
  content: {
    width: "70%",
    maxHeight: "500px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    overflow: "auto",
  },

  row: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "15px 20px",
    borderTop: "1px solid #e7eaf3",
  },
  right: {
    textAlign: "left",
    marginLeft: "15px",
  },
  text: { display: "inline", marginRight: "10px" },
};
export default function Home() {
  return (
    <div style={styles.content}>
      <img src={logoIcon} alt="" />
    </div>
  );
}
