// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");
const fs = require('fs');

const _daoFactory = "0x3Bc09191fcc444F4C9585610ff34D23980C0F4E9";
const _ens = "0x88dEb9968D66fb88418FA4a531ADbeDeCaB107C3";
const _miniMeFactory = "0x199326FEbBf4d16958EA52FD3C5F9927D9B0f5B1"; // MiniMeTokenFactory address
const _aragonID = "0xfe9489Cd6eB55C8d2AB656290b0141C45c995c1A";

const _dai = '0x94Ba7A27c7A95863d1bdC7645AC2951E0cca06bA';  // Dai Stablecoin address on Fuse (proxy)

async function main() {
  console.log("deploying....");
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  
  // Aragon Network Token-ANT contract
  // const ANT = await hre.ethers.getContractFactory("ANT");
  // const ant = await ANT.deploy(_miniMeFactory); // MiniMeTokenFactory address
  // await ant.deployed();
  // console.log("ANT deployed to:", ant.address);
  // const _ant = ant.address;  // Aragon Network Token-ANT address
  const _ant = '0x7d30692970EEaACcE8d5E6E8e083d2c2144f2775';  // Aragon Network Token-ANT address

  const FundraisingMultisigTemplate = await hre.ethers.getContractFactory("FundraisingMultisigTemplate");
  console.log("step1");
  const fundraisingMultisigTemplate = await FundraisingMultisigTemplate.deploy(_daoFactory, _ens, _miniMeFactory, _aragonID, _dai, _ant);
  console.log("step2");
  await fundraisingMultisigTemplate.deployed();
  console.log("step3");
  console.log("FundraisingMultisigTemplate deployed to:", fundraisingMultisigTemplate.address);

  const writeContractsAddr = "DAOFactory=" + _daoFactory + "\nENS=" + _ens + "\nMiniMeTokenFactory=" + _miniMeFactory + "\nFIFSResolvingRegistrar="+ _aragonID + "\nDAI="+ _dai + "\nANT="+ _ant + "\nFundraisingMultisigTemplate=" + fundraisingMultisigTemplate.address;
  fs.writeFileSync('.contractAddress', writeContractsAddr, function (err) {
    if (err) return console.log("err " + err);
    console.log('.contractAddress!!!!!!!');
  });

  console.log("deployed\n");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
