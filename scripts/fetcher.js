require("dotenv").config()

let rpcUrl = process.env.RPC_URL

const { createAlchemyWeb3 } = require("@alch/alchemy-web3")
const contractAddress = "0xC18360217D8F7Ab5e7c516566761Ea12Ce7F9D72"
const contractAbi = require("../contracts/token.abi.json")

const web3 = createAlchemyWeb3(rpcUrl)
const contract = new web3.eth.Contract(contractAbi, contractAddress)

async function main() {
    const result = await contract.methods.name().call()
    console.log(result)
    // console.log("k")
}

main()

