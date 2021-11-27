import Unity, {UnityContext} from "react-unity-webgl";
import './styles.css';
import { useEffect, useState } from "react";
import useChkPrice from "hooks/useChkPrice";
import useInchDex from "hooks/useInchDex";
import { useNFTBalance } from "hooks/useNFTBalance";
import { useNativeBalance } from "hooks/useNativeBalance";
import { useMoralisDapp } from "providers/MoralisDappProvider/MoralisDappProvider";

const buildName = "farm9";
const loadDomen = "https://gnoblin.github.io/";


const unityContext = new UnityContext({
  loaderUrl: loadDomen + "Build/" + buildName + ".loader.js",
  dataUrl: loadDomen + "Build/"+ buildName + ".data",
  frameworkUrl: loadDomen + "Build/"+ buildName + ".framework.js",
  codeUrl: loadDomen + "Build/"+ buildName + ".wasm",
  //streamingAssetsUrl: loadDomen,

});

function Gaming() {
  const { walletAddress, chainId } = useMoralisDapp();
  console.log(unityContext.loaderUrl);
// react from unity
useEffect( function() {
    unityContext.on("GetNFTs", async function () {
  
      let json = JSON.stringify([
        {
          name: "Misunderstood",
          url: "https://lh3.googleusercontent.com/3E0qUN4iyTpIXggREm86iomiIIsybRUH3QFKw2RsidZK3ljFPiZZeQ8SvaKIskJmoCUOlCSLhTQylbM3h1H5tMmmIsNTCuVBVdB1zo4=w600",
          price: Math.random()*100+10
        },
        {
          name: "IMMACULATE QUACKLEY",
          url: "https://lh3.googleusercontent.com/94YGYl98ddOzenQE7h1wF0vT3hlvWNTr1JBw9rXJ4VsMv4pfET4MQXCLzCqqESefGRlDZiOATp1SNufPVHp23vJDkjVJiaNapjvh7w=w600",
          price: Math.random()*100+10},         
        {
          name: "Runner",
          url: "https://opensea.io/assets/0x97597002980134bea46250aa0510c9b90d87a587/2862",
          price: 25}, 
        {
          name: "Bitfox",
          url: "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/66406747123743156841746366950152533278033835913591691491127077901758411833345",
          price: Math.random()*100+10},
              ]);
  
      onGetNfts(json);
  
    });
  
  }, []);
  
  const props =
  {
  }
  const { balance, nativeName } = useNativeBalance(props);
  console.log(balance.formatted + nativeName);
  useEffect( function() {
    unityContext.on("GetBalance", async function () {
  
      let json = JSON.stringify([
        {name: "bitcoin", amount: Math.random()*10+1},
        {name: "ccoin", amount: Math.random()*10+1},
        {name: "cardano", amount: Math.random()*10+1},
        {name: "dogecoin", amount: Math.random()*10+1},
        {name: "etherium", amount: Math.random()*10+1},
        {name: "squidgame", amount: Math.random()*10+1},
        {name: "tether", amount: Math.random()*10+1},
        {name: "wax", amount: Math.random()*10+1},
              ]);
  
      onGetBalance(json);
  
    });
  
  }, []);

  const optionsETH =
  { 
    address :
        chainId === "0x1"
          ? `0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419`
        : chainId === "0x4"
          ? `0x8A753747A1Fa494EC906cE90E9f37563A8AF630e`
        : chainId === '0x89'
          ?`0xF9680D99D6C9589e2a93a78A04A279e509205945`
         : `0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419`
  }
  let chkPriceETH = ''; 
  chkPriceETH = useChkPrice(optionsETH)/100000000; 
  console.log("Outside listner ETH:" + chkPriceETH);
  
  const optionsBTC =
  {
    address:
      chainId === "0x1"
        ? `0xF4030086522a5bEEa4988F8cA5B36dbC97BeE88c`
      : chainId === "0x4"
        ? `0xECe365B379E1dD183B20fc5f022230C044d51404`
      : chainId === '0x89'
        ?`0xc907E116054Ad103354f2D350FD2514433D57F6f`
       : `0xF4030086522a5bEEa4988F8cA5B36dbC97BeE88c`
  }
  let chkPriceBTC = ''; 
  chkPriceBTC = useChkPrice(optionsBTC)/100000000; 
  console.log("Outside listner BTC:" + chkPriceBTC);

  const optionsLINK =
  {
    address:
      chainId === "0x1"
        ? `0x2c1d072e956AFFC0D435Cb7AC38EF18d24d9127c`
      : chainId === "0x4"
        ? `0xd8bD0a1cB028a31AA859A21A3758685a95dE4623`
      : chainId === '0x89'
        ?`0xd9FFdb71EbE7496cC440152d43986Aae0AB76665`
       : `0x2c1d072e956AFFC0D435Cb7AC38EF18d24d9127c`
  }
  let chkPriceLINK = ''; 
  chkPriceLINK = useChkPrice(optionsLINK)/100000000; 
  console.log("Outside listner LINK:" + chkPriceLINK);

  const optionsAAVE =
  {
    address:
      chainId === "0x1"
        ? `0x547a514d5e3769680Ce22B2361c10Ea13619e8a9`
      : chainId === "0x4"
        ? ``
      : chainId === '0x89'
        ?`0x72484B12719E23115761D5DA1646945632979bB6`
       : `0x547a514d5e3769680Ce22B2361c10Ea13619e8a9`
  }
  let chkPriceAAVE = ''; 
  chkPriceAAVE = useChkPrice(optionsAAVE)/100000000; 
  console.log("Outside listner AAVE:" + chkPriceAAVE);

  useEffect( function() {
    unityContext.on("GetPrice", function () {
      // do what you need 
      //console.log("inside listner ETH:" + chkPriceETH);
      //console.log("inside listner BTC:" + chkPriceBTC);
      //console.log("inside listner LINK:" + chkPriceLINK);
      //console.log("inside listner AAVE:" + chkPriceAAVE);

      let json = JSON.stringify([
        {name: "ETH", amount: chkPriceETH},
        {name: "BTC", amount: chkPriceBTC},         
        {name: "LINK", amount:chkPriceLINK}, 
        {name: "AAVE", amount: chkPriceAAVE},
              ]);
      
      onGetPrice(json);
    });
  
  }, [chkPriceETH,chkPriceBTC,chkPriceLINK,chkPriceAAVE]);
  
  
  const { trySwap, getQuote, getSupportedTokens, tokenList } = useInchDex();
  const currentTrade = 
  {
    fromToken:"0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270",
    toToken: "0xd6df932a45c0f255f85145f286ea0b292b21c90b",
    fromAmount:"0.01",
    chain:"polygon"
  }

  useEffect( function() {
    unityContext.on("Buy", function () {
      trySwap(currentTrade);
    
      onBuy("buy status");
    });
  
  }, []);
  
  
  useEffect(function() {
    unityContext.on("GetCoinsCourse", function() {
      let json = JSON.stringify([
        {
          name: "bitcoin",
          cost: Math.random()* 100 + 10,
        },
        {
          name: "ccoin",
          cost: Math.random()* 100 + 10,
        },
        {
          name: "cardano",
          cost: Math.random()* 100 + 10,
        },
        {
          name: "dogecoin",
          cost: Math.random()* 100 + 10,
        },
        {
          name: "etherium",
          cost: Math.random()* 100 + 10,
        },
        {
          name: "squidgame",
          cost: Math.random(10, 100),
        },
        {
          name: "tether",
          cost: Math.random()* 100 + 10,
        },
        {
          name: "wax",
          cost: Math.random()* 100 + 10,
        }]);
  
        onGetCoinCourse(json);
  
    })
  })
  
  const { NFTBalance } = useNFTBalance();
  //console.log(NFTBalance[0].image,NFTBalance[0].token_address,NFTBalance[0].metadata name )
  NFTBalance.map((nft, index) => (
    console.log(nft.name),
    console.log(nft?.image),
    console.log(nft.token_address)
    ));
  useEffect( function() {
    unityContext.on("GetNftBalance", function () {
    console.log(NFTBalance)
      let json = JSON.stringify([
        {name: "Misunderstood", amount: Math.random()*100+10},
        {name: "IMMACULATE QUACKLEY", amount: Math.random()*100+10},         
        {name: "Runner", amount: 25 }, 
        {name: "Bitfox", amount: Math.random()*100+10},
              ]);
              
      onGetNftBalance(json);
      
    });
  
  }, [NFTBalance]);
  
  
  useEffect( function() {
    unityContext.on("GetGet", function () {
      let json = JSON.stringify([
        {name: "Misunderstood", amount: Math.random()*100+10},
        {name: "IMMACULATE QUACKLEY", amount: Math.random()*100+10},         
        {name: "Runner", amount: 25 }, 
        {name: "Bitfox", amount: Math.random()*100+10},
              ]);
              
      onGetNftBalance(json);
      
    });
  
  }, []);
  
  //const currentTrade = { fromToken, toToken, fromAmount, chain };

  useEffect( function() {
    unityContext.on("BuyCoins", function () {
      let status = "status";
              
      onBuyCoins(status);
      
    });
  
  }, []);
  
  
  
  
  
  //unity from react
  function onBuy(status) {
    unityContext.send("NFTManager", "OnBuy", status);
  }
  
  function onGetBalance(data) {
    unityContext.send("Managers", "OnGetBalance", data);
  }
  
  function onGetNfts(nfts) {
    unityContext.send("NFTManager", "OnGetNFTs", nfts);
  }
  
  function onGetPrice(data) {
    console.log("on get price");
    unityContext.send("NFTManager", "OnGetPrice", data);
    
  }
  
  function onGetCoinCourse(data) {
    unityContext.send("Managers", "OnGetCourse", data);
  }
  
  function onGetNftBalance(data) {
    unityContext.send("NFTManager", "OnGetNFTBalance", data);
  }
  
  function onBuyCoins(data) {
    unityContext.send("Managers", "OnBuyCoins", data);
  }
  
  
  
    return (
       <Unity unityContext={unityContext} style={{ width: '100%', height: '100%' }}/>
    );
}
export default Gaming;