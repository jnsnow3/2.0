require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.20",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: ["0x4b50985d08892183fa489efc9239257fab4c21256c91b1c51de5b44c453b71cc"],
    },
  },
};
