import Unity, {UnityContext} from "react-unity-webgl";
import './styles.css';
import { useEffect, useState } from "react";
import useChkPrice from "hooks/useChkPrice";

const buildName = "farm4";
const unityContext = new UnityContext({
  loaderUrl: "Build/" + buildName + ".loader.js",
  dataUrl: "Build/"+ buildName + ".data",
  frameworkUrl: "Build/"+ buildName + ".framework.js",
  codeUrl: "Build/"+ buildName + ".wasm",
});

function Gaming() {

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
    address:"0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419",  
    chain:"eth"
  }
  let chkPriceETH = ''; 
  chkPriceETH = useChkPrice(optionsETH)/100000000; 
  console.log("Outside listner ETH:" + chkPriceETH);
  
  const optionsBTC =
  {
    address:"0xF4030086522a5bEEa4988F8cA5B36dbC97BeE88c",  
    chain:"eth"
  }
  let chkPriceBTC = ''; 
  chkPriceBTC = useChkPrice(optionsBTC)/100000000; 
  console.log("Outside listner BTC:" + chkPriceBTC);

  const optionsLINK =
  {
    address:"0x2c1d072e956AFFC0D435Cb7AC38EF18d24d9127c",  
    chain:"eth"
  }
  let chkPriceLINK = ''; 
  chkPriceLINK = useChkPrice(optionsLINK)/100000000; 
  console.log("Outside listner LINK:" + chkPriceLINK);

  const optionsAAVE =
  {
    address:"0x547a514d5e3769680Ce22B2361c10Ea13619e8a9",  
    chain:"eth"
  }
  let chkPriceAAVE = ''; 
  chkPriceAAVE = useChkPrice(optionsAAVE)/100000000; 
  console.log("Outside listner AAVE:" + chkPriceAAVE);

  useEffect( function() {
    unityContext.on("GetPrice", function () {
      // do what you need 
      console.log("inside listner ETH:" + chkPriceETH);
      console.log("inside listner BTC:" + chkPriceBTC);
      console.log("inside listner LINK:" + chkPriceLINK);
      console.log("inside listner AAVE:" + chkPriceAAVE);

      let json = JSON.stringify([
        {name: "ETH", amount: chkPriceETH},
        {name: "BTC", amount: chkPriceBTC},         
        {name: "LINK", amount:chkPriceLINK}, 
        {name: "AAVE", amount: chkPriceAAVE},
              ]);
      
      onGetPrice(json);
    });
  
  }, [chkPriceETH,chkPriceBTC,chkPriceLINK,chkPriceAAVE]);
  
  
  
  useEffect( function() {
    unityContext.on("Buy", function () {
    
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
  
  
  useEffect( function() {
    unityContext.on("GetNftBalance", function () {
      let json = JSON.stringify([
        {name: "Misunderstood", amount: Math.random()*100+10},
        {name: "IMMACULATE QUACKLEY", amount: Math.random()*100+10},         
        {name: "Runner", amount: 25 }, 
        {name: "Bitfox", amount: Math.random()*100+10},
              ]);
              
      onGetNftBalance(json);
      
    });
  
  }, []);
  
  
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