// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");
fs = require('fs');

async function main() {
  console.log("deploying...");
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy

  // ENSDeployer contract
  const ENSDeployer = await hre.ethers.getContractFactory("ENSDeployer");
  const ensDeployer = await ENSDeployer.deploy();
  await ensDeployer.deployed();
  console.log("ENSDeployer deployed to:", ensDeployer.address);

  const writeContractsAddr = "ENSDeployer="+ ensDeployer.address;
  fs.writeFileSync('.contractAddress', writeContractsAddr, function (err) {
    if (err) return console.log("err " + err);
    console.log('.contractAddress!!!!!!!');
  });

  console.log("deployed\n");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
