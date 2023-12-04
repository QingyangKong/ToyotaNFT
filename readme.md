# Toyota Dynamic NFT

## How to use it?
1. Clone the repo and install all dependencies:
- `git clone https://github.com/QingyangKong/ToyotaNFT.git`
- `cd ToyotaNFT`
- `npm install`

2. Set envrionment variable:
- `npx env-enc set-pw` and then input a password
- `npx env-enc set` to set 2 environment variable `PRIVATE_KEY` and `FUJI_RPC_URL`.

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

7. Mint a new NFT
`0x351d64c79fe3dbbb99762e9864c19f9f5a540953` is the NFT address in the sample and you can mint a nft from this one by running `npx hardhat run scripts/mint.js`
if you created a new NFT instead of using the sample one, please
replace the address in the line `const nftAddr = "0x351d64c79fe3dbbb99762e9864c19f9f5a540953";` with your NFT address. <br>

## Sample
Please check NFT on Opensea [here](https://testnets.opensea.io/assets/avalanche-fuji/0x351d64c79fe3dbbb99762e9864c19f9f5a540953/0). Please turn on the [upkeep](https://automation.chain.link/fuji/83881029675942488756942993316654624457738606195197815948233990029820563087411) to make it dynamic.