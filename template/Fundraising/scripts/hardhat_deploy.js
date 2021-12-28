
// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

const _daoFactory = "0xfCB46ECD10cb31B4A73bB23508966A3Fcd17d2Bf";
const _ens = "0x7B270C0A889248eC1F42feE2E32D48095470f71c";
const _miniMeFactory = "0xE6724f0E63FA73ACa69eF0c26C9ac2F10A42B7F7";
const _aragonID = "0xc0e3E830694a721DB3f038c121b419370D53057E";
const _dai = '0xaD6D458402F60fD3Bd25163575031ACDce07538D';  // ropsten DAI address
const _ant = '0x9d78d63f126ec092ace0744fedfed84dbe913e12';  // ropsten ANT address

async function main() {
  console.log("deploying....");
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const FundraisingMultisigTemplate = await hre.ethers.getContractFactory("FundraisingMultisigTemplate");
  const fundraisingMultisigTemplate = await FundraisingMultisigTemplate.deploy(_daoFactory, _ens, _miniMeFactory, _aragonID, _dai, _ant);

  await fundraisingMultisigTemplate.deployed();

  console.log("FundraisingMultisigTemplate deployed to:", fundraisingMultisigTemplate.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
