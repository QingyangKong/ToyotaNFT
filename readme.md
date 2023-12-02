# Toyota Dynamic NFT

## How to use it?
1. Clone the repo and install all dependencies:
- `git clone https://github.com/QingyangKong/ToyotaNFT.git`
- `cd ToyotaNFT`
- `npm install`

2. Set envrionment variable:
- `npx env-enc set-pw` and then input a password
- `npx env-enc set` to set 2 environment variable `PRIVATE_KEY` and `SEPOLIA_RPC_URL`.

3. Compile and deploy on Ethereum Sepolia:
- `npx hardhat compile`
- `npx hardhat run /scripts/deploy.js`

4. Go the Opensea testnet and click profile to check your NFT.

5. Make the NFT as a dynamic NFT
Head to [automation app](https://automation.chain.link/).<br>
Create a new upkeep by clicking the button.<br>
Input the contract address and add 5 LINKs into the balance.

6. Back to Opensea testnet and check NFT again
click the three dots and in the top right<br>
click "refresh metadata"<br>
refresh the page