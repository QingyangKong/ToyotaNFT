/** @type import('hardhat/config').HardhatUserConfig */
require("@nomicfoundation/hardhat-toolbox")
require("@chainlink/env-enc").config()

const SEPOLIA_RPC_URL =
    process.env.SEPOLIA_RPC_URL || "https://eth-mainnet.alchemyapi.io/v2/your-api-key"
const PRIVATE_KEY = process.env.PRIVATE_KEY

module.exports = {
  solidity: "0.8.20",
  networks: {
    sepolia: {
      url: `${SEPOLIA_RPC_URL}`,
      accounts: [`${PRIVATE_KEY}`]
    }
  }
};
