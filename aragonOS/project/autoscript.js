const { exec } = require("child_process");
require('dotenv').config();

const hardhatClean = "npx hardhat clean";
const hardhatCompile = "npx hardhat compile";
const hardhatDeploy = "npx hardhat run --network " + process.env.NETWORK + " ./scripts/deploy.js";
var contractAddr;
var inParam;
var hardhatVerify;

// clean step
console.log(hardhatClean); 
exec(hardhatClean, (error, stdout, stderr) => {
    if (error) {
        console.log(`${error.message}`);
    }
    if (stderr) {
        console.log(`${stderr}`);
    }
    console.log(`${stdout}`);
    console.log("=====hardhat clean success======");
    console.log(" ");
    console.log(hardhatCompile);
});

// compile step
exec(hardhatCompile, (error, stdout, stderr) => { 
    if (error) {
        console.log(`${error.message}`);
    }
    if (stderr) {
        console.log(`${stderr}`);
    }
    console.log(`${stdout}`);
    console.log("=====hardhat compile success======");
    console.log(" ");
    console.log(hardhatDeploy);
});

// deploy step
exec(hardhatDeploy, (error, stdout, stderr) => {
    try {
        if (error) {
            console.log(`${error.message}`);
        }
        if (stderr) {
            console.log(`${stderr}`);
        }
        console.log(`${stdout}`);
        console.log("=====hardhat deploy success======");
        console.log(" ");
        
    // verify step
        fs = require('fs');
        contractAddr = fs.readFileSync("./.contractAddress").toString().trim();
        inParam = fs.readFileSync("./.inParam").toString().trim();
        hardhatVerify = "npx hardhat verify --network " + process.env.NETWORK + " " + contractAddr + " " + inParam;
        console.log(hardhatVerify);
        // exec(hardhatVerify, (error, stdout, stderr) => {
        //     if (error) {
        //         console.log(`${error.message}`);
        //     }
        //     if (stderr) {
        //         console.log(`${stderr}`);
        //     }
        //     console.log(`${stdout}`);
        //     console.log("=====hardhat verify success======");
        //     console.log(" ");
    // visit and check step
            exec("echo Complete! Please visit and check!", (error, stdout, stderr) => {
                if (error) {
                    console.log(`${error.message}`);
                }
                if (stderr) {
                    console.log(`${stderr}`);
                }
                console.log(`${stdout}`);
                exec("start " + process.env.FUSE_EXPLORER_URL + "address/" + contractAddr, (error, stdout, stderr) => {
                    if (error) {
                        console.log(`${error.message}`);
                    }
                    if (stderr) {
                        console.log(`${stderr}`);
                    }
                    console.log(`${stdout}`);
                });
            });
        // });
    } catch(_) { console.err("exception");}
});
