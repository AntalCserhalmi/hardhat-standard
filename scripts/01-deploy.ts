import { ethers } from "hardhat";

async function main() {
    const StandardERC721Factory = await ethers.getContractFactory("StandardERC721");

    console.log("Deploying contract...");
    const standardERC721 = await StandardERC721Factory.deploy(
        0,
        100,
        3,
        9000000000000000,
        100,
        "baseURI/",
        "notRevealedURI/",
    );

    await standardERC721.deployed();
    console.log(`Contract address: ${standardERC721.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
