// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");
const fs = require('fs');

const _daoFactory = "0x3Bc09191fcc444F4C9585610ff34D23980C0F4E9";
const _ens = "0x88dEb9968D66fb88418FA4a531ADbeDeCaB107C3";
const _miniMeFactory = "0x199326FEbBf4d16958EA52FD3C5F9927D9B0f5B1";
const _aragonID = "0xfe9489Cd6eB55C8d2AB656290b0141C45c995c1A";
const _standardBounties = "0x99a07Fa270780a0F9b7bea4891eeC88E0B8e9260";
const _inParamArray = [_daoFactory, _ens, _miniMeFactory, _aragonID, _standardBounties];

async function main() {
  console.log("deploying....");
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const OpenEnterpriseTemplate = await hre.ethers.getContractFactory("OpenEnterpriseTemplate");
  const openEnterpriseTemplate = await OpenEnterpriseTemplate.deploy([_daoFactory, _ens, _miniMeFactory, _aragonID, _standardBounties]);
  await openEnterpriseTemplate.deployed();
  console.log("OpenEnterpriseTemplate deployed to:", openEnterpriseTemplate.address);

  const writeContractsAddr = "DAOFactory=" + _daoFactory + "\nENS=" + _ens + "\nMiniMeTokenFactory=" + _miniMeFactory + "\nFIFSResolvingRegistrar=" + _aragonID + "\nStandardBounties="+ _standardBounties + "\nOpenEnterpriseTemplate=" + openEnterpriseTemplate.address;
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
