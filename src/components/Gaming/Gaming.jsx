import Unity, {UnityContext} from "react-unity-webgl";
import './styles.css';
import { useEffect, useState } from "react";
import useChkPrice from "hooks/useChkPrice";
import useInchDex from "hooks/useInchDex";
import { useNFTBalance } from "hooks/useNFTBalance";
import { useNFTDetails } from "hooks/useNFTDetails";
import { useNativeBalance } from "hooks/useNativeBalance";
import { useMoralisDapp } from "providers/MoralisDappProvider/MoralisDappProvider";
import useTokenPrice from "hooks/useTokenPrice";
import { useERC20Balance } from "hooks/useERC20Balance";
import { useMoralis } from "react-moralis";

const buildName = "farm10";
const loadDomen = "https://gnoblin.github.io/";


const unityContext = new UnityContext({
  loaderUrl: loadDomen + "Build/" + buildName + ".loader.js",
  dataUrl: loadDomen + "Build/"+ buildName + ".data",
  frameworkUrl: loadDomen + "Build/"+ buildName + ".framework.js",
  codeUrl: loadDomen + "Build/"+ buildName + ".wasm",
  //streamingAssetsUrl: loadDomen,
  /*loaderUrl: "Build/" + buildName + ".loader.js",
  dataUrl: "Build/"+ buildName + ".data",
  frameworkUrl: "Build/"+ buildName + ".framework.js",
  codeUrl: "Build/"+ buildName + ".wasm",*/

});

function Gaming() {
  const { walletAddress, chainId } = useMoralisDapp();
  console.log(unityContext.loaderUrl);
// react from unity
const nft1Options = 
  {
    tokenAddress:"0xa3f226d6633cA531c1F8e26cfBf724B1eEe9202E",
    tokenId: "3",
    chain:"eth"
  }

  const { NFTBalance } = useNFTBalance();
  //const NFTData = useNFTDetails(nft1Options);
  //console.log("nft1:" + NFTData);
useEffect( function() {
    unityContext.on("GetNFTs", async function () {
  
console.log("GetNFTs - in the shop");
      let json = JSON.stringify([
        {
          name: "Misunderstood",
          url: "https://lh3.googleusercontent.com/3E0qUN4iyTpIXggREm86iomiIIsybRUH3QFKw2RsidZK3ljFPiZZeQ8SvaKIskJmoCUOlCSLhTQylbM3h1H5tMmmIsNTCuVBVdB1zo4=w600",
          price: 2.9
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
  const { assets } = useERC20Balance(props);
  //const balBTC = assets.filter((e) => e.symbol === "0xBTC")
  const { Moralis } = useMoralis();
  
  

  useEffect( function() {
    unityContext.on("GetBalance", async function () {
  
  console.log("GetBalance (coins)");
      let balBTC;
      console.log("assets:" + JSON.stringify(assets))
      balBTC = assets.filter((e) => e.symbol === "0xBTC")
      //console.log("balBTC: " + parseFloat(Moralis.Units.FromWei(balBTC.balance, balBTC.decimals).toFixed(6)) )
      let json = JSON.stringify([
        {name: "bitcoin", amount: Math.random()*10+1},
        {name: "ccoin", amount: Math.random()*10+1},
        {name: "cardano", amount: Math.random()*10+1},
        {name: "dogecoin", amount: Math.random()*10+1},
        {name: "etherium", amount: balance.formatted},
        {name: "squidgame", amount: Math.random()*10+1},
        {name: "tether", amount: Math.random()*10+1},
        {name: "wax", amount: Math.random()*10+1},
              ]);
  
      onGetBalance(json);
  
    });
  
  }, [assets]);

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
  const currentTradeBTC = 
  {
    "fromToken": {"symbol":"MATIC","name":"MATIC","decimals":18,"address":"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
                  "logoURI":"https://tokens.1inch.io/0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0.png"},
    "toToken": {"symbol":"0xBTC","name":"0xBitcoin Token","decimals":8,"address":"0x71b821aa52a49f32eed535fca6eb5aa130085978",
              "logoURI":"https://tokens.1inch.io/0x71b821aa52a49f32eed535fca6eb5aa130085978.png"},
    "fromAmount":"11111111111111111",
    "chain":"polygon"
  }

  const currentTradeTether = 
  {
    "fromToken": {"symbol":"MATIC","name":"MATIC","decimals":18,"address":"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
                  "logoURI":"https://tokens.1inch.io/0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0.png"},
    "toToken": {"symbol":"USDT","name":"Tether USD","decimals":6,"address":"0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
                  "logoURI":"https://tokens.1inch.io/0xdac17f958d2ee523a2206206994597c13d831ec7.png"},
    "fromAmount":"111111111111111",
    "chain":"polygon"
  }

  useEffect( function() {
    unityContext.on("Buy", function (token, amount) {    
      
    console.log("Buy "+token+", "+amount);
    if (token == "Bitcoin") trySwap(currentTradeBTC);
    else if (token == "Tether") trySwap(currentTradeTether);
    else (console.log("token not available for purchase"));
    onBuy("buy status", token, amount);
    });
  
  }, []);
  
  const optionsADA =
  {
    address:
      chainId === "0x1"
        ? `0xAE48c91dF1fE419994FFDa27da09D5aC69c30f55`
      : chainId === "0x4"
        ? ``
      : chainId === '0x89'
        ?`0x882554df528115a743c4537828DA8D5B58e52544`
       : `0xAE48c91dF1fE419994FFDa27da09D5aC69c30f55`
  }
  let chkPriceADA = ''; 
  chkPriceADA = useChkPrice(optionsADA)/100000000; 
  console.log("Outside listner ADA:" + chkPriceADA);
  
  const optionsDoge =
  {
    address:
      chainId === "0x1"
        ? `0x2465CefD3b488BE410b941b1d4b2767088e2A028`
      : chainId === "0x4"
        ? ``
      : chainId === '0x89'
        ?`0xbaf9327b6564454F4a3364C33eFeEf032b4b4444`
       : `0x2465CefD3b488BE410b941b1d4b2767088e2A028`
  }
  let chkPriceDoge = ''; 
  chkPriceDoge = useChkPrice(optionsDoge)/100000000; 
  console.log("Outside listner Doge:" + chkPriceDoge);

  const optionsTether =
  {
    address:
      chainId === "0x1"
        ? `0x2465CefD3b488BE410b941b1d4b2767088e2A028`
      : chainId === "0x4"
        ? `0xa24de01df22b63d23Ebc1882a5E3d4ec0d907bFB`
      : chainId === '0x89'
        ?`0x0A6513e40db6EB1b165753AD52E80663aeA50545`
       : `0x2465CefD3b488BE410b941b1d4b2767088e2A028`
  }
  let chkPriceTether = ''; 
  chkPriceTether = useChkPrice(optionsTether)/100000000; 
  console.log("Outside listner chkPriceTether:" + chkPriceTether);

  useEffect(function() {
    unityContext.on("GetCoinsCourse", function() {
    console.log("GetCoinsCourse means get Coin Price ");
    console.log("inside listner ETH:" + chkPriceETH);
    console.log("inside listner BTC:" + chkPriceBTC);
    console.log("inside listner LINK:" + chkPriceLINK);
    console.log("inside listner AAVE:" + chkPriceAAVE);
    console.log("inside listner Tether:" + chkPriceTether);
    console.log("inside listner Doge:" + chkPriceDoge);
    console.log("inside listner ADA:" + chkPriceADA);

      let json = JSON.stringify([
        {
          name: "bitcoin",
          cost: chkPriceBTC,
        },
        {
          name: "ccoin",
          cost: Math.random()* 100 + 10,
        },
        {
          name: "cardano",
          cost: chkPriceADA,
        },
        {
          name: "dogecoin",
          cost: chkPriceDoge,
        },
        {
          name: "etherium",
          cost: chkPriceETH,
        },
        {
          name: "squidgame",
          cost: Math.random()* 100 + 10,
        },
        {
          name: "tether",
          cost: chkPriceTether,
        },
        {
          name: "wax",
          cost: Math.random()* 100 + 10,
        }]);
  
        onGetCoinCourse(json);
  
    })
  }, [chkPriceETH,chkPriceBTC,chkPriceLINK,chkPriceAAVE,chkPriceTether,chkPriceDoge,chkPriceADA]);
  

  //console.log(NFTBalance[0].image,NFTBalance[0].token_address,NFTBalance[0].metadata name )
  NFTBalance.map((nft, index) => (
    console.log(nft.name),
    console.log(nft?.image),
    console.log(nft.token_address)
    ));
  useEffect( function() {
    unityContext.on("GetNftBalance", function () {
    console.log("GetNFTBalance - in your house");
      let json = JSON.stringify([
      {name: "Misunderstood",
       amount: Math.random()*100+10,
       url:"https://lh3.googleusercontent.com/3E0qUN4iyTpIXggREm86iomiIIsybRUH3QFKw2RsidZK3ljFPiZZeQ8SvaKIskJmoCUOlCSLhTQylbM3h1H5tMmmIsNTCuVBVdB1zo4=w600"},
      {name: "IMMACULATE QUACKLEY",
       amount: Math.random()*100+10,
       url:"https://lh3.googleusercontent.com/94YGYl98ddOzenQE7h1wF0vT3hlvWNTr1JBw9rXJ4VsMv4pfET4MQXCLzCqqESefGRlDZiOATp1SNufPVHp23vJDkjVJiaNapjvh7w=w600"},         
      {name: "Bohemian Bulldog",
       amount: Math.random()*100+10,
       url: "https://lh3.googleusercontent.com/AMsHvRMGxYwljHCURORo26vAY_coUXotmAD947U_lpsS6aamSxcbIg7P9AeiBWet7qGDYifuQokxYOIMRvVnpNcNLJS-6N61tDGx=w600"}, 
      {name: "CreatureToad",
       amount: Math.random()*100+10,
       url: "https://lh3.googleusercontent.com/jOIWdyKz0IRrpsjqEUOIWeNfOzmso-O4f9ZFkw18o18VEhm-gu3Yl2f9hTQ18fIkOT1L-oX8ovNi9t4d5OwEvmsW9hsr5zRmTAbJbQ=w600"
      }]);
              
      onGetNftBalance(json);
      
    });
  
  }, [NFTBalance]);
  
  
  useEffect( function() {
    unityContext.on("GetGet", function () {
    console.log("GetNFTBalance - in your house (again)");
      let json = JSON.stringify([
        {name: "Misunderstood", amount: Math.random()*100+10},
        {name: "IMMACULATE QUACKLEY", amount: Math.random()*100+10},         
      {name: "Bohemian Bulldog", amount: Math.random()*100+10}, 
      {name: "CreatureToad", amount: Math.random()*100+10},
              ]);
              
      onGetNftBalance(json);
      
    });
  
  }, []);
  
  //const currentTrade = { fromToken, toToken, fromAmount, chain };

  useEffect( function() {
    unityContext.on("BuyCoins", function () {
    console.log("Buy Coins (not used) ?");
      let status = "status";
              
      onBuyCoins(status);
      
    });
  
  }, []);
  
  
  
  
  
  //unity from react
function onBuy(status, coin, count) {
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