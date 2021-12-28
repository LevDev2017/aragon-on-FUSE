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

  // Kernel contract
  const Kernel = await hre.ethers.getContractFactory("Kernel");
  const kernel = await Kernel.deploy(true);
  await kernel.deployed();
  console.log("Kernel deployed to:", kernel.address);

  // Kernel contract
  const EVMScriptRegistryFactory = await hre.ethers.getContractFactory("EVMScriptRegistryFactory");
  const evmScriptRegistryFactory = await EVMScriptRegistryFactory.deploy();
  await evmScriptRegistryFactory.deployed();
  console.log("EVMScriptRegistryFactory deployed to:", evmScriptRegistryFactory.address);

  // ACL contract
  const ACL = await hre.ethers.getContractFactory("ACL");
  const acl = await ACL.deploy();
  await acl.deployed();
  console.log("ACL deployed to:", acl.address);

  // DAOFactory contract
  const DAOFactory = await hre.ethers.getContractFactory("DAOFactory");
  const daoFactory = await DAOFactory.deploy(kernel.address, acl.address, evmScriptRegistryFactory.address);
  await daoFactory.deployed();
  console.log("DAOFactory deployed to:", daoFactory.address);

  const writeContractsAddr = "Kernel="+ kernel.address + "\nEVMScriptRegistryFactory=" + evmScriptRegistryFactory.address + "\nACL=" + acl.address + "\nDAOFactory=" + daoFactory.address;
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
