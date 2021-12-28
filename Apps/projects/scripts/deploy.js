// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");
const fs = require('fs');

async function main() {
  console.log("deploying....");
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy

  // 
  // const _bountiesAddr = "0x99a07Fa270780a0F9b7bea4891eeC88E0B8e9260"; // address of StandardBounties contract
  
  // Vault contract
  // const Vault = await hre.ethers.getContractFactory("Vault");
  // const vault = await Vault.deploy();
  // await vault.deployed();
  // console.log("Vault deployed to:", vault.address);
  // const _vault = vault.address;
  // const _vault = "0xAd830485abc4906b0b726d39788e33f095dc5fFD";

  // Projects contract
  const Projects = await hre.ethers.getContractFactory("Projects");
  const projects = await Projects.deploy();
  await projects.deployed();
  console.log("Projects deployed to:", projects.address);

  // const writeContractsAddr = "StandardBounties=" + _bountiesAddr + "\nVault=" + _vault + "\nProjects=" + projects.address;
  const writeContractsAddr = "Projects=" + projects.address;
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
