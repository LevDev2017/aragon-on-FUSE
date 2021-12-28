// module.exports = require('@aragon/hardhat-config')
require("@nomiclabs/hardhat-etherscan")
require("@nomiclabs/hardhat-ethers")
require("@aragon/hardhat-aragon")
require('dotenv').config()

const { join } = require("path");

// get the network url and account private key from ~/.aragon/network_key.json
function getNetworkConfig(network) {
  // default to mumbai
  let url = "";
  let accounts = [];

  // try {
  //   const networkConfig = require(join(
  //     "../../../../../../../../../Profile/Wallet/", //your path
  //     `${network}_key.json`
  //   ));
  //   url = networkConfig.rpc;
  //   accounts = networkConfig.keys;
  // } catch (_) {}

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
    },
  },
  namedAccounts: {
    deployer: 0,
  },
  defaultNetwork: "FuseNet",
  networks: {
    hardhat: {
      throwOnTransactionFailures: true,
      throwOnCallFailures: true,
      allowUnlimitedContractSize: true,
    },
    mainnet: getNetworkConfig("mainnet"),
    rinkeby: getNetworkConfig("rinkeby"),
    ropsten: getNetworkConfig("ropsten"),
    FuseNet: getNetworkConfig("FuseNet"),
    mumbai: getNetworkConfig("mumbai"),
    matic: getNetworkConfig("matic"),
    harmony: getNetworkConfig('harmony'),
    harmonyTest: getNetworkConfig('harmonyTest'),
    bsc: getNetworkConfig('bsc'),
    bscTest: getNetworkConfig('bscTest'),
    stardust: getNetworkConfig('stardust'),
    andromeda: getNetworkConfig('andromeda'),
  },
  mocha: {
    timeout: 30000,
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
  }
};


// require("@nomiclabs/hardhat-etherscan")
// require("@nomiclabs/hardhat-ethers")
// require("@aragon/hardhat-aragon")

// const { homedir } = require("os");
// const { join } = require("path");

// // get the network url and account private key from ~/.aragon/network_key.json
// function getNetworkConfig(network) {
//   // default to mumbai
//   let url = "";
//   let accounts = [];

//   try {
//     const networkConfig = require(join(
//       homedir(),
//       `.aragon/${network}_key.json`
//     ));
//     url = networkConfig.rpc;
//     accounts = networkConfig.keys;
    
//   } catch (_) {}

//   return { url, accounts };
// }

// *
//  * @type import('hardhat/config').HardhatUserConfig
 
// module.exports = {
//   solidity: {
//     version: "0.4.24",
//     settings: {
//       optimizer: {
//         enabled: true,
//         runs: 20000,
//       },
//     },
//   },
//   namedAccounts: {
//     deployer: 0,
//   },
//   defaultNetwork: "hardhat",
//   networks: {
//     hardhat: {
//       throwOnTransactionFailures: true,
//       throwOnCallFailures: true,
//       allowUnlimitedContractSize: true,
//     },
//     mainnet: getNetworkConfig("mainnet"),
//     rinkeby: getNetworkConfig("rinkeby"),
//     mumbai: getNetworkConfig("mumbai"),
//     matic: getNetworkConfig("matic"),
//     harmony: getNetworkConfig('harmony'),
//     harmonyTest: getNetworkConfig('harmonyTest'),
//     bsc: getNetworkConfig('bsc'),
//     bscTest: getNetworkConfig('bscTest'),
//     stardust: getNetworkConfig('stardust'),
//     andromeda: getNetworkConfig('andromeda'),
//   },
//   mocha: {
//     timeout: 30000,
//   },
//   etherscan: {
//     apiKey: process.env.ETHERSCAN_API_KEY
//   }
// };
