async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);
  
    const toyotaNftContract = await ethers.getContractFactory("ToyotaNFT");
    const toyotaNft = await toyotaNftContract.connect(deployer).deploy(deployer.address);
    await toyotaNft.waitForDeployment();
  
    console.log("Token address:", await toyotaNft.target);

    await toyotaNft.mintCar();

    console.log(`car minted successfully for address ${deployer.address} sucessfully`)
    console.log(`Please check your NFT at https://testnets.opensea.io/assets/sepolia/${toyotaNft.target}/0`)
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });