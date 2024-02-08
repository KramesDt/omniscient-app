const { ethers } = require("hardhat");

async function main() {
  const deployer = await ethers.provider.getSigner();
  console.log("Deploying contracts with the account:", deployer.address);
  const accountBalance = await deployer.provider.getBalance(deployer.address);
  console.log("Account balance: ", accountBalance.toString());

  // Deploy Omniscient TOken contract
  const Omniscient = await ethers.getContractFactory("Omniscient");
  const omniscientToken = await Omniscient.deploy("Omniscient", "OMNI");
  await omniscientToken.waitForDeployment();

  console.log("Omniscient Token deployed to:", omniscientToken.target);

  // Deploy OmniSwap contract
  const OmniSwap = await ethers.getContractFactory("OmniSwap");
  const omniSwap = await OmniSwap.deploy();
  await omniSwap.waitForDeployment();

  console.log("OmniSwap deployed to:", omniSwap.target);


  // // Transfer initial supply of Omniscient tokens to OmniSwap contract
  // const initialSupply = ethers.parseEther("1000000000");
  // console.log("initialSupply: ", initialSupply);
  // await omniscientToken.transfer(omniSwap.target, initialSupply);

  // console.log("Initial supply transferred to OmniSwap contract.");

  // // Print token details
  // const tokenName = await omniscientToken.name();
  // console.log("Token Name:", tokenName);

  // Print OmniSwap contract details
  const ethBalance = await omniSwap.getEthBalance();
  console.log(
    "OmniSwap Eth Balance:",
    ethers.formatEther(ethBalance),
    "ETH"
  );

  // for (let i = 0; i < omniSwap.tokens.length; i++) {
  //   const tokenName = omniSwap.tokens[i];
  //   const tokenBalance = await omniSwap.getBalance(tokenName, omniSwap.address);
  //   console.log(
  //     `OmniSwap ${tokenName} Balance:`,
  //     ethers.utils.formatUnits(tokenBalance, 18),
  //     tokenName
  //   );
  //   const tokenAddress = await omniSwap.getTokenAddress(tokenName);
  //   console.log(`${tokenName} Address:`, tokenAddress);
  // }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
