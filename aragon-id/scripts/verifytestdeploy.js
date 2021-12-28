// // We require the Hardhat Runtime Environment explicitly here. This is optional
// // but useful for running the script in a standalone fashion through `node <script>`.
// //
// // When running the script with `npx hardhat run <script>` you'll find the Hardhat
// // Runtime Environment's members available in the global scope.
// const hre = require("hardhat");
// fs = require('fs');

// async function main() {
//   console.log("deploying...");
//   // Hardhat always runs the compile task when running scripts with its command
//   // line interface.
//   //
//   // If this script is run directly using `node` you may want to call compile
//   // manually to make sure everything is compiled
//   // await hre.run('compile');

//   // We get the contract to deploy
//   const TestVerify = await hre.ethers.getContractFactory("TestVerify");
//   const testVerify = await TestVerify.deploy();

//   await testVerify.deployed();

//   console.log("TestVerify deployed to:", testVerify.address);
//   fs.writeFileSync('.contractAddress', testVerify.address, function (err) {
//     if (err) return console.log("err " + err);
//     console.log('.contractAddress!!!!!!!');
//   });

// }

// // We recommend this pattern to be able to use async/await everywhere
// // and properly handle errors.
// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });


fs = require('fs');
console.log(fs);

fs.writeFileSync('write_test', "hello" + "\n" + "happy\n" + "happy\n" + "happy\n", function (err) {
  if (err) return console.log("err " + err);
  console.log('.write_test!!!!!!!');
});