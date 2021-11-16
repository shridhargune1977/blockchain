import React, { useState } from "react";
import { useMoralis } from "react-moralis";
import styled from 'styled-components';
import closeIcon from '../../assets/icons/close.png';
import ToggleButton from "../ToogleButton/ToggleButton";
import ChkPrice from "../ChkPrice"
import { useMoralisDapp } from "providers/MoralisDappProvider/MoralisDappProvider";

import styles from "./styles";

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


function Invest (props) {
  const { walletAddress, chainId } = useMoralisDapp();
  //chainId -- 0x1->Ethereum, 0x4->Rinkeby ,0X89->Polygon,
  console.log("current chain in invest:" + chainId);
  console.log("walletAddress:" + walletAddress);
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
                <div style={{color:"#041836", fontSize:"12px", fontWeight:700}}>{'ETH / USD'}</div>
                <div style={{color:"darkgray", fontSize:"12px", fontWeight:700}}>{'Link'}</div>                           
              </div>
              {/* <div style={{color:"#041836", fontSize:"12px", fontWeight:700}}>{'0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419'}</div> */}
              <div style={{color:"#041836", fontSize:"12px", fontWeight:700}}>{'0x8A753747A1Fa494EC906cE90E9f37563A8AF630e'}</div>
              
              <div>
                <div style={{color:"darkgreen", fontSize:"12px", fontWeight:700}}>{'0.06%'}</div>   
                <div style={{color:"darkgreen", fontSize:"12px", fontWeight:700}}> 
                <ChkPrice
              address={
              chainId === "0x1"
                ? `0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419`
              : chainId === "0x4"
                ? `0x8A753747A1Fa494EC906cE90E9f37563A8AF630e`
              : chainId === '0x89'
                ?`0xF9680D99D6C9589e2a93a78A04A279e509205945`
               : `0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419`
              }
              
              chain="eth"
              image="https://cloudflare-ipfs.com/ipfs/QmXttGpZrECX5qCyXbBQiqgQNytVGeZW5Anewvh2jc4psg/"

            />
            </div>
              </div>
            </RightCardContainer>
{/* -------------------------------------------------------------------------------------------------   */}
            <RightCardContainer>
              <div>
                <div style={{color:"#041836", fontSize:"12px", fontWeight:700}}>{'BTC / USD'}</div>
                <div style={{color:"darkgray", fontSize:"12px", fontWeight:700}}>{'Link'}</div>                           
              </div>
              <div style={{color:"#041836", fontSize:"12px", fontWeight:700}}>{'0xf4030086522a5beea4988f8ca5b36dbc97bee88c'}</div>
              <div>
                <div style={{color:"darkgreen", fontSize:"12px", fontWeight:700}}>{'0.06%'}</div>   
                <div style={{color:"darkgreen", fontSize:"12px", fontWeight:700}}> 
                <ChkPrice
              address={
              chainId === "0x1"
                ? `0xF4030086522a5bEEa4988F8cA5B36dbC97BeE88c`
              : chainId === "0x4"
                ? `0xECe365B379E1dD183B20fc5f022230C044d51404`
              : chainId === '0x89'
                ?`0xc907E116054Ad103354f2D350FD2514433D57F6f`
               : `0xF4030086522a5bEEa4988F8cA5B36dbC97BeE88c`
              }
              chain="eth"
              image="https://cloudflare-ipfs.com/ipfs/QmXttGpZrECX5qCyXbBQiqgQNytVGeZW5Anewvh2jc4psg/"

            />
            </div>
              </div>
            </RightCardContainer>
            <RightCardContainer>
              <div>
                <div style={{color:"#041836", fontSize:"12px", fontWeight:700}}>{'LINK / USD'}</div>
                <div style={{color:"darkgray", fontSize:"12px", fontWeight:700}}>{'Link'}</div>                           
              </div>
              <div style={{color:"#041836", fontSize:"12px", fontWeight:700}}>{'0x2c1d072e956AFFC0D435Cb7AC38EF18d24d9127c'}</div>
              <div>
                <div style={{color:"darkgreen", fontSize:"12px", fontWeight:700}}>{'0.06%'}</div>
                <div style={{color:"darkgreen", fontSize:"12px", fontWeight:700}}>    
                <ChkPrice
              address={
              chainId === "0x1"
                ? `0x2c1d072e956AFFC0D435Cb7AC38EF18d24d9127c`
              : chainId === "0x4"
                ? `0xd8bD0a1cB028a31AA859A21A3758685a95dE4623`
              : chainId === '0x89'
                ?`0xd9FFdb71EbE7496cC440152d43986Aae0AB76665`
               : `0x2c1d072e956AFFC0D435Cb7AC38EF18d24d9127c`
              }
              chain="eth"
              image="https://cloudflare-ipfs.com/ipfs/QmXttGpZrECX5qCyXbBQiqgQNytVGeZW5Anewvh2jc4psg/"

            />
            </div>
              </div>
            </RightCardContainer>
            <RightCardContainer>
              <div>
                <div style={{color:"#041836", fontSize:"12px", fontWeight:700}}>{'AAVE / USD'}</div>
                <div style={{color:"darkgray", fontSize:"12px", fontWeight:700}}>{'Link'}</div>                           
              </div>
              <div style={{color:"#041836", fontSize:"12px", fontWeight:700}}>{'0x547a514d5e3769680Ce22B2361c10Ea13619e8a9'}</div>
              <div>
                <div style={{color:"darkgreen", fontSize:"12px", fontWeight:700}}>{'0.06%'}</div>   
                <div style={{color:"darkgreen", fontSize:"12px", fontWeight:700}}> 
                <ChkPrice
              address={
              chainId === "0x1"
                ? `0x547a514d5e3769680Ce22B2361c10Ea13619e8a9`
              : chainId === "0x4"
                ? ``
              : chainId === '0x89'
                ?`0x72484B12719E23115761D5DA1646945632979bB6`
               : `0x547a514d5e3769680Ce22B2361c10Ea13619e8a9`
              }
              chain="eth"
              image="https://cloudflare-ipfs.com/ipfs/QmXttGpZrECX5qCyXbBQiqgQNytVGeZW5Anewvh2jc4psg/"

            /></div>
              </div>
            </RightCardContainer>
  {/* ------------------------------------------------------------------------------------------------ */}
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
export default Invest;