import Web3 from "web3";
import { TransactionConfig, SignedTransaction } from "web3-core";
import { AbiItem } from "web3-utils";
import contract from "../../artifacts/contracts/StandardERC721.sol/StandardERC721.json";


require("dotenv").config();

const API_URL = process.env.API_URL;
const PUBLIC_KEY = process.env.PUBLIC_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

if (API_URL === undefined){
    console.log("API URL IS UNDEFINED");
    process.exit(1);
}

if (PUBLIC_KEY === undefined){
    console.log("PUBLIC KEY IS DEFINED");
    process.exit(1);
}

if (PRIVATE_KEY === undefined){
    console.log("PRIVATE KEY IS DEFINED");
    process.exit(1);
}

const web3 = new Web3(API_URL);
const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
const nftContract = new web3.eth.Contract(contract.abi as AbiItem[], contractAddress);

const getBaseURI = async () => {
    console.log(await nftContract.methods.tokenURI(1).call());
};


getBaseURI().catch(err => console.log(err));
