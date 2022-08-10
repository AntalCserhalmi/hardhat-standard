import dotenv from "dotenv";
dotenv.config();

import * as task from "./tasks/block-number";
import * as gasReporter from "hardhat-gas-reporter";

import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const {API_URL, PRIVATE_KEY, COINMARKETCAP_API_KEY, ETHERSCAN_API_KEY} = process.env;

const config: HardhatUserConfig = {
    solidity: "0.8.9",
    defaultNetwork: "hardhat",
    networks: {
        hardhat: {
            chainId: 31337
        },

        localhost: {
            url: "http://localhost:8545",
            chainId: 31337
        }
    },
    gasReporter: {
        enabled: true,
        currency: "USD",
        outputFile: "gas-report.txt",
        noColors: false,
        coinmarketcap: COINMARKETCAP_API_KEY
    },
    etherscan:{
        apiKey: ETHERSCAN_API_KEY
    }
};

export default config;
