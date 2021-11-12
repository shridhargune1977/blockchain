import React, { useState } from "react";
import useChkPrice from "hooks/useChkPrice";
import { useMoralis } from "react-moralis";
import styled from 'styled-components';
import closeIcon from '../assets/icons/close.png';
import ToggleButton from "./ToogleButton/ToggleButton";

const HeaderContainer = styled.div`
background-color: white;
width: 80%;
border-radius:5px;
padding:10px 20px 10px 20px;
`;

const HeaderText = styled.h1`
color: black;
`;

const CloseIcon = styled.img`
width:30px;
height: 30px;
`;

const HeaderSubContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`;

const InnerLeftContainer = styled.div`
width: 50%;
padding: 5px 10px 5px 5px;
`;

const InnerRightContainer = styled.div`
width: 50%;
padding: 5px 5px 5px 10px;
`;

const SymbolText = styled.div`
font-size: 12px;
color: black;
font-weight: 700;
`;

const SymbolInput = styled.input`
width: 40%;
border-bottom-right-radius: 8px;
border-top-right-radius: 8px;
background-color: aliceblue;
font-size: 14px;
color: #041836;
font-weight: 700;
padding: 2px 0px 2px 5px;
border-color: aliceblue;
border-top:aliceblue;
border-left-color: lightgrey;
height: 45px;
`;

const SymbolInputLeft = styled.div`
display: flex;
background-color: aliceblue;
font-size: 12px;
color: #041836;
font-weight: 700;
border-bottom-left-radius: 8px;
border-top-left-radius: 8px;
align-items: center;
padding: 0 10px;
border: none;
height: 45px;
`;

const SymbolContainer = styled.div`
display:flex;
flex-direction: row;
align-items: center;
`;

const NameInput = styled.input`
background-color: aliceblue;
font-size: 12px;
color: #041836;
font-weight: 700;
border-radius: 8px;
align-items: center;
padding: 0 10px;
width: 100%;
border: none;
height: 45px;
`;

const TextAreaDiv = styled.textarea`
width:100%;
border-radius: 8px;
background-color: aliceblue;
font-size: 12px;
color: #041836;
font-weight: 700;
padding: 10px 0px 0px 10px;
border: none;
`;

const Dropdown = styled.select`
background-color: aliceblue;
font-size: 12px;
color: #041836;
font-weight: 700;
width: 50%;
height: 45px;
padding:0px 10px 0px 10px;
border-radius: 8px;
border-color: white;
margin-right: 20px;
`;

const VisibleText = styled.div`
font-size: 12px;
color: #041836;
font-weight: 700;
margin-right: 10px;
margin-left: 10px;
`;

const ToggleDiv = styled.div`
display: flex;
justify-content: space-between;
flex-direction: row;
align-items: center;
`;

const AllocationText = styled.div`
font-size: 12px;
color: #041836;
font-weight: 700;
margin-top: 10px;
`;

const AllocationContainerLeft = styled.div`
margin-top: 5px;
background-color: aliceblue;
padding: 5px 15px 5px 5px;
border-radius: 8px;
width: 90%;
margin-right: 20px;
`;

const AllocationContainerRight = styled.div`
margin-top: 5px;
padding: 15px;
background-color: aliceblue;
border-radius: 8px;
`;

const BottomLable = styled.div`
background-color: aliceblue;
border-radius: 8px;
padding: 15px 15px 15px 5px;
display: flex;
justify-content: space-between;
flex-direction: row;
align-items: center;
margin-top: 20%;
`;

const MainContainer = styled.div`
display: flex;
flex-direction: row;
margin-top: 10px;
`;

const SearchInput = styled.input`
background-color: aliceblue;
border-radius: 8px;
width: 100%;
border: none;
padding: 0 10px;
height: 45px;
align-items: center;
font-size: 14px;
color: #041836;
font-weight: 700;
`;

const RightCardContainer = styled.div`
margin-top: 8px;
background-color: aliceblue;
padding: 5px 15px 5px 5px;
border-radius: 8px;
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`;

const Divider = styled.div`
width: 1px;
background-color: #343636;
`;

const BottomDivider = styled.div`
height:1px;
background-color: #343636;
`;

const ButtonDiv = styled.button`
  background-color: #343636;
  color: white;
  font-size: 15px;
  font-weight: 700;
  padding: 5px 30px;
  border-radius: 8px;
  margin: 10px 0px 0px 0px;
  cursor: pointer;
  border: none;
`;

const ButtonDivRight = styled.button`
  background-color: #21bf96;
  color: white;
  font-size: 15px;
  font-weight: 700;
  padding: 5px 30px;
  border-radius: 8px;
  border: none;
  margin: 10px 0px 0px 10px;
  cursor: pointer;
`;

const ButtonContainer = styled.div`
display: flex;
justify-content: flex-end;
`;

export const ChkPrice = (props) => {
  const [symbole, setSymbol] = useState({
    value:'111',
    show:''
});

const [name, setName] = useState({
  value:'Test Fund',
  show:''
});

const [textarea, setTextarea]= useState("test test test");

 const handleChangeSymbol = (e) => {
  setSymbol({value: e.target.value})
}

const handleChangeName = (e) => {
  setName({value: e.target.value})
}

const handleChangeTextarea = (e) => {
  setTextarea( e.target.value)
}

  // const { Moralis } = useMoralis();

  // let web3 = Moralis.Web3.enable();

  // let contractAbi = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"}];
  // let contract = new web3.eth.Contract([{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"string","name":"_coin","type":"string"}],"name":"getLatestPrice","outputs":[{"internalType":"int256","name":"","type":"int256"},{"internalType":"int8","name":"","type":"int8"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}],
  //    "0x9394d17CbD1081304FEc7061906673917680b22A");
  
  //    let output = contract.methods.getLatestPrice("matic").call();
  // console.log(output)
  // let time=new Date(parseInt(output[2])*1000);
  // let price=parseInt(output[0]);
  // let multiplier = 10**parseInt(output[1]);
  // let out=price/multiplier;
  // var disp="$"+out;

  // const { chkPrice } = useChkPrice(props);
  // const [isUSDMode, setIsUSDMode] = useState(true);

  // const toggleDisplayStyle = () => setIsUSDMode(isUSDMode ? false : true);

  // const noLogoToken = "https://etherscan.io/images/main/empty-token.png";

  
  return (
    // <div style={styles.token}>
    //   <img src={props.image || noLogoToken} alt="logo" style={{ height: props?.size || "35px" }} />
    //   <span
    //     style={{ cursor: "pointer" }}
    //     onClick={toggleDisplayStyle}
    //     title={`Show in ${isUSDMode ? "ETH" : "USD"}`}
    //   >
    //     {chkPrice && (isUSDMode ? chkPrice.usdPrice : chkPrice.nativePrice)}
    //   </span>
    // </div>
    <HeaderContainer>
      <HeaderSubContainer>
        <HeaderText>Creat New Fund</HeaderText>
        <CloseIcon src={closeIcon}/>
      </HeaderSubContainer>
      <BottomDivider />
      <MainContainer>
      <InnerLeftContainer>
        <div style={{flexDirection:"row", display:"flex"}}>
          <div style={{width:"25%", marginRight:"24px"}}>
            <SymbolText>{"Symbol"}</SymbolText>
            <SymbolContainer>
              <SymbolInputLeft>{"XTF2XXX"}</SymbolInputLeft>           
              <SymbolInput type="text" value={symbole.value} onChange={(e)=>handleChangeSymbol(e)} />
            </SymbolContainer>
          </div>
          <div style={{width:"70%"}}>
            <SymbolText>{"Name"}</SymbolText>
            <NameInput type="text" value={name.value} onChange={(e)=>handleChangeName(e)} />
          </div>
        </div>
        <div style={{marginTop:'10px'}}>
          <SymbolText>{"Description"}</SymbolText>
          <TextAreaDiv
            value={textarea}
            onChange={handleChangeTextarea}
            rows={6}
          />
        </div>
        <div style={{display:"flex", flexDirection: "row", alignItems:"center", justifyContent:"space-between"}}>
          <Dropdown value="CONSERVATIVE">
            <option value="CONSERVATIVE">CONSERVATIVE</option>
            <option value="MODERATE">MODERATE</option>
            <option value="GROWTH">GROWTH</option>
            <option value="AGGRESIVE">AGGRESIVE</option>
            <option value="BALANCED">BALANCED</option>
          </Dropdown>
          <ToggleDiv>
            <VisibleText>{"Visible"}</VisibleText>
            <ToggleButton/>
            <VisibleText>{"Hidden"}</VisibleText>
          </ToggleDiv>
        </div>
        <AllocationText>Allocation</AllocationText>
        <div style={{display:"flex", flexDirection:"row"}}>
          <AllocationContainerLeft>
            <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
              <div style={{color:"#041836", fontSize:"14px", fontWeight:700}}>{'Band Protocol'}</div>
              <div style={{color:"darkgreen", fontSize:"12px", fontWeight:700}}>{'4.52%'}</div>
            </div>
            <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
              <div style={{color:"darkgray", fontSize:"12px", fontWeight:700}}>{'BAND'}</div>
              <div style={{color:"darkgreen", fontSize:"12px", fontWeight:700}}>{'$6.820'}</div>
            </div>
          </AllocationContainerLeft>
          <AllocationContainerRight>
            <div style={{color:"#041836", fontSize:"14px", fontWeight:700}}>{'30%'}</div>
          </AllocationContainerRight>
        </div>
        <BottomLable>
          <div style={{color:"#041836", fontSize:"14px", fontWeight:700}}>{'4 / 10 Tokens'}</div>
          <div style={{color:"#041836", fontSize:"14px", fontWeight:700}}>{'100.00%'}</div>
        </BottomLable>
      </InnerLeftContainer>
      <Divider />
      <InnerRightContainer>
        <SearchInput
            type="text"
            id="header-search"
            placeholder="Search for a tocken name, symbol or address"
        />
            <RightCardContainer>
              <div>
                <div style={{color:"#041836", fontSize:"12px", fontWeight:700}}>{'Chain Link'}</div>
                <div style={{color:"darkgray", fontSize:"12px", fontWeight:700}}>{'Link'}</div>                           
              </div>
              <div style={{color:"#041836", fontSize:"12px", fontWeight:700}}>{'0xb4f7...9521'}</div>
              <div>
                <div style={{color:"darkgreen", fontSize:"12px", fontWeight:700}}>{'0.06%'}</div>   
                <div style={{color:"darkgreen", fontSize:"12px", fontWeight:700}}>{'$18.130'}</div>
              </div>
            </RightCardContainer>
{/* -------------------------------------------------------------------------------------------------   */}
            <RightCardContainer>
              <div>
                <div style={{color:"#041836", fontSize:"12px", fontWeight:700}}>{'Chain Link'}</div>
                <div style={{color:"darkgray", fontSize:"12px", fontWeight:700}}>{'Link'}</div>                           
              </div>
              <div style={{color:"#041836", fontSize:"12px", fontWeight:700}}>{'0xb4f7...9521'}</div>
              <div>
                <div style={{color:"darkgreen", fontSize:"12px", fontWeight:700}}>{'0.06%'}</div>   
                <div style={{color:"darkgreen", fontSize:"12px", fontWeight:700}}>{'$18.130'}</div>
              </div>
            </RightCardContainer>
            <RightCardContainer>
              <div>
                <div style={{color:"#041836", fontSize:"12px", fontWeight:700}}>{'Chain Link'}</div>
                <div style={{color:"darkgray", fontSize:"12px", fontWeight:700}}>{'Link'}</div>                           
              </div>
              <div style={{color:"#041836", fontSize:"12px", fontWeight:700}}>{'0xb4f7...9521'}</div>
              <div>
                <div style={{color:"darkgreen", fontSize:"12px", fontWeight:700}}>{'0.06%'}</div>   
                <div style={{color:"darkgreen", fontSize:"12px", fontWeight:700}}>{'$18.130'}</div>
              </div>
            </RightCardContainer>
            <RightCardContainer>
              <div>
                <div style={{color:"#041836", fontSize:"12px", fontWeight:700}}>{'Chain Link'}</div>
                <div style={{color:"darkgray", fontSize:"12px", fontWeight:700}}>{'Link'}</div>                           
              </div>
              <div style={{color:"#041836", fontSize:"12px", fontWeight:700}}>{'0xb4f7...9521'}</div>
              <div>
                <div style={{color:"darkgreen", fontSize:"12px", fontWeight:700}}>{'0.06%'}</div>   
                <div style={{color:"darkgreen", fontSize:"12px", fontWeight:700}}>{'$18.130'}</div>
              </div>
            </RightCardContainer>
  {/* ----------------------------------------------------------------------------------------------- */}
      </InnerRightContainer>
      </MainContainer>
      <BottomDivider />
      <ButtonContainer>
        <ButtonDiv>
          save
        </ButtonDiv>
        <ButtonDivRight>
          save & Launch
        </ButtonDivRight>
        </ButtonContainer>
    </HeaderContainer>
  );
}
