mergeInto(LibraryManager.library, {
  GetNFTs: function () {
    dispatchReactUnityEvent("GetNFTs");
  },
});

mergeInto(LibraryManager.library, {
  GetPrice: function () {
    dispatchReactUnityEvent("GetPrice");
  },
});

mergeInto(LibraryManager.library, {
  Buy: function (token, amount) {
    dispatchReactUnityEvent("Buy", Pointer_stringify(token), amount);
  },
});

mergeInto(LibraryManager.library, {
  GetNftBalance: function () {
    dispatchReactUnityEvent("GetNftBalance");
  },
});


mergeInto(LibraryManager.library, {
  GetCoinsCourse: function () {
    dispatchReactUnityEvent("GetCoinsCourse");
  },
});


mergeInto(LibraryManager.library, {
  BuyCoins: function (name, amount) {
    dispatchReactUnityEvent("BuyCoins", Pointer_stringify(name), amount);
  },
});


mergeInto(LibraryManager.library, {
  GetBalance: function () {
    dispatchReactUnityEvent("GetBalance");
  },
});

mergeInto(LibraryManager.library, {
  GetCoinsCourse: function () {
    dispatchReactUnityEvent("GetCoinsCourse");
  },
});


