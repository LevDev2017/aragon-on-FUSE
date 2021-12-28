require("@nomiclabs/hardhat-etherscan")
require("@nomiclabs/hardhat-ethers")
require("@aragon/hardhat-aragon")
require('dotenv').config()

// get the network url and account private key from .env
function getNetworkConfig(network) {
  // default to mumbai
  let url = "";
  let accounts = [];

  try {
    if(network == "ropsten")
    {
      url = process.env.ROPSTEN_URL;
      accounts = [process.env.PRIVATE_KEY];
    }
    else if (network == "ganache") 
    {
      url = process.env.GANACHE_URL;
      accounts = [process.env.GANACHE_PRIVATE_KEY];
    }
    else if (network == "FuseNet") 
    {
      url = process.env.FUSE_URL;
      accounts = [process.env.PRIVATE_KEY];
    }
  } catch (_) {}

  return { url, accounts };
}

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: "0.4.24",
    settings: {
      optimizer: {
        enabled: true,
        runs: 2, // fixed "code size exceeded" in FundraisingMultisigTemplate
        // runs: 20000,
      },
      evmVersion: 'byzantium',
    },
  },
  namedAccounts: {
    deployer: 0,
  },
  defaultNetwork: "ropsten",
  networks: {
    hardhat: {
      throwOnTransactionFailures: true,
      throwOnCallFailures: true,
      allowUnlimitedContractSize: true,
    },
    mainnet: getNetworkConfig("mainnet"),
    rinkeby: getNetworkConfig("rinkeby"),
    ganache: getNetworkConfig("ganache"),
    ropsten: getNetworkConfig("ropsten"),
    mumbai: getNetworkConfig("mumbai"),
    matic: getNetworkConfig("matic"),
    harmony: getNetworkConfig('harmony'),
    harmonyTest: getNetworkConfig('harmonyTest'),
    bsc: getNetworkConfig('bsc'),
    bscTest: getNetworkConfig('bscTest'),
    stardust: getNetworkConfig('stardust'),
    andromeda: getNetworkConfig('andromeda'),
    FuseNet: getNetworkConfig("FuseNet"),
  },
  mocha: {
    timeout: 30000,
  },
  etherscan: {
    apiKey: process.env.COINSCAN_API_KEY
  }
};
