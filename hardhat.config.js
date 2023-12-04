/** @type import('hardhat/config').HardhatUserConfig */
require("@nomicfoundation/hardhat-toolbox")
require("@chainlink/env-enc").config()

const SEPOLIA_RPC_URL =
    process.env.SEPOLIA_RPC_URL || "https://eth-mainnet.alchemyapi.io/v2/your-api-key"

const FUJI_RPC_URL =
    process.env.FUJI_RPC_URL || "https://eth-mainnet.alchemyapi.io/v2/your-api-key"

const PRIVATE_KEY = process.env.PRIVATE_KEY

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.20",
        settings: {
          evmVersion: "paris",
        }
      }
    ]
  },
  networks: {
    sepolia: {
      url: `${SEPOLIA_RPC_URL}`,
      accounts: [`${PRIVATE_KEY}`]
    },
    fuji: {
      url: `${FUJI_RPC_URL}`,
      accounts: [`${PRIVATE_KEY}`]
    }
  }
};
