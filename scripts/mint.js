async function main() {
    const nftAddr = "0x351d64c79fe3dbbb99762e9864c19f9f5a540953";
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);
  
    const toyotaNftContract = await ethers.getContractFactory("ToyotaNFT");
    const toyotaNft = await toyotaNftContract.attach(nftAddr);

    console.log("Get NFT at address:", await toyotaNft.target);
    console.log("Minting a NFT from ", await toyotaNft.target);
    const mintTransaction = await toyotaNft.mintCar();
    const mintTransactionReceipt = mintTransaction.wait(1);

    console.log(`car minted successfully for address ${deployer.address} sucessfully`)
    console.log(`Please check your NFT at opensea`)
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });