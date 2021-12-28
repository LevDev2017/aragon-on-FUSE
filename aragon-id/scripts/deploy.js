// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");
fs = require('fs');

const namehash = require('eth-ens-namehash');

function getRootNodeFromTLD(tld) {
  return {
    namehash: namehash.hash(tld),
  };
}

async function main() {
  console.log("deploying...");
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy

  // ENS contract
  const _ensAddr = "0x88dEb9968D66fb88418FA4a531ADbeDeCaB107C3";

  // PublicResolver contract
  const PublicResolver = await hre.ethers.getContractFactory("PublicResolver");
  const publicResolver = await PublicResolver.deploy(_ensAddr);
  await publicResolver.deployed();
  console.log("PublicResolver deployed to:", publicResolver.address);

  var tld = 'fuse';
  var _node = getRootNodeFromTLD(tld);

  // FIFSResolvingRegistrar contract
  const FIFSResolvingRegistrar = await hre.ethers.getContractFactory("FIFSResolvingRegistrar");
  const fifsResolvingRegistrar = await FIFSResolvingRegistrar.deploy(_ensAddr, publicResolver.address, _node.namehash);
  await fifsResolvingRegistrar.deployed();
  console.log("FIFSResolvingRegistrar deployed to:", fifsResolvingRegistrar.address);

  const writeContractsAddr = "ENS="+ _ensAddr + "\nPublicResolver=" + publicResolver.address + "\n_node=" + _node.namehash + "\nFIFSResolvingRegistrar=" + fifsResolvingRegistrar.address;
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
