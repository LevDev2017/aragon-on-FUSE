# Deploy Aragon on fuse and all required dependencies. (ENS)

To deploy contracts, follow these steps:

## Step 1: Environment

First, move to the contract project directory you want to deploy.

Example:  ./aragonDeoply/Apps/address-book

Second, run command as follows:

`npm install`

## Step 2: Edit ".env" file.

Copy the .env.example file to a file named .env, and then edit it to fill in the details.

Example:

```shell
NETWORK=FuseNet
FUSE_URL=https://rpc.fuse.io
PRIVATE_KEY="Your Private Key"
REPORT_GAS=true
ETHERSCAN_API_KEY="Your API Key"
COINSCAN_API_KEY="Your API Key"
ROPSTEN_URL="Your Ropsten RPC"
GANACHE_URL=http://127.0.0.1:8545
GANACHE_PRIVATE_KEY="Your Private Key(Ganache)"
FUSE_EXPLORER_URL=https://explorer.fuse.io/
ROPSTEN_EXPLORER_URL=https://ropsten.etherscan.io/
```

## Step 3: Clean and compile

Run command as follows:

`npx hardhat clean`

`npx hardhat compile`

## Step 4: Deploy

Run command as follows:

`npx hardhat run --network FuseNet ./scripts/deploy.js`

## The list of contract addresses

| Contract Name | Contract Address | Verify |
|-------------------|------------------|---------------------------------------------|
| Kernel | 0x34fcBA8AfB8081E33df898d9Da52a072aD6fF170 | yes |
| EVMScriptRegistryFactory | 0x8C978F7A7D01B037B5d724CA219F17AedA361D26 | yes |
| ACL | 0x38f0C02D03Ff3a30809008787c670245636A0FDe | yes |
| DAOFactory | 0x3Bc09191fcc444F4C9585610ff34D23980C0F4E9 | yes |
| ENSDeployer | 0x119175CEeC78e9378e064F8be0e12b19aA19EF23 | yes |
| ENS | 0x88dEb9968D66fb88418FA4a531ADbeDeCaB107C3 | yes |
| PublicResolver | 0x8C5BE7E729B7CA993404CF7E571De15c6499BEC0 | yes |
| FIFSResolvingRegistrar | 0xfe9489Cd6eB55C8d2AB656290b0141C45c995c1A | yes |
| MiniMeTokenFactory | 0x199326FEbBf4d16958EA52FD3C5F9927D9B0f5B1 | yes |
| DandelionOrg | 0xf6BB55C3c11c62289d33dCb94Dc8b9C68f936925 | yes |
| CompanyTemplate | 0xba7270e4e7fb83fF83f57fea3b87c87f16a8Ce07 | yes |
| MembershipTemplate | 0xFB2131d9515aA3cb64b8b67575E3a9696dcE94Fa | yes |
| ReputationTemplate | 0x6C11748CaA7F6E4E459341f7183d5E8FE420Fb87 | yes |
| StandardBounties | 0x99a07Fa270780a0F9b7bea4891eeC88E0B8e9260 | yes |
| OpenEnterpriseTemplate | 0xaA3c69DCCd18c22bCE820Ecfbf7cCfF039DDBb07 | yes |
| DAI | 0x94Ba7A27c7A95863d1bdC7645AC2951E0cca06bA | yes |(already)
| ANT | 0x7d30692970EEaACcE8d5E6E8e083d2c2144f2775 | yes |
| FundraisingMultisigTemplate | 0x064Ad03c2d0Ce72df8085371cF9b3c73A0C024Cd | yes |
| AddressBook | 0x6176188490F490435F3b93DA2FD741F476E4f56E | yes |
| Agent | 0xB5B3F22C0D5dE46985C4b060cbAE29998800B086 | yes |
| Allocations | 0xAbF3D574d4B112fdF563167F57d7731a696870f3 | yes |
| DotVoting | 0xE6724f0E63FA73ACa69eF0c26C9ac2F10A42B7F7 | yes |
| Finance | 0x975b67d255B8c71355852668DCd3e546aD98b383 | yes |
| AragonFundraisingController | 0x673d01ef7F95E2Dc3743066cc5B73E8A721F6dB5 | yes |
| Vault | 0xAd830485abc4906b0b726d39788e33f095dc5fFD | yes |
| Projects | 0x100C041205F4fcb37861d635ab81Fb6Ac81Bb004 | yes |
| Redemptions | 0xCBC1D377eb54714e0069867aca1b1cdD691C181C | yes |
| Rewards | 0xc90c2C1B11327dB5D2dA677F08739Ccd99311d8a | yes |
| TimeLock | 0xc0e3E830694a721DB3f038c121b419370D53057E | yes |
| TokenManager | 0x7dbFa54EC5C071d70f5eEA91896dcc5645F6924A | yes |
| TokenRequest | 0x1dCD94a18376E34455274ed7069A6E3870fFd8E2 | yes |
| Voting | 0xaB047Bbc2Ae6D98A89179188C7B3eD0585Bf7D0F | yes |
| TokenBalanceOracle | 0x2235825E08d384Bc6Cc2CCdDbA2f7478600Ad897 | yes |
