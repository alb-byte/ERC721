const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));

// web3.eth.personal.getAccounts().then(console.log)

const contractAddress = '0x688AcAB70d207A2869c96739d5b613445d5CE8D0'
const json = require('./contracts/TestFactory.json');
const start = async () => {
    const url = "data:image/jpeg;base64,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"
    const accounts = await web3.eth.personal.getAccounts()
    const instance = new web3.eth.Contract(json.abi, contractAddress, { from: accounts[0], gas: 1000000000 });

    const buyRes = await instance.methods.mintTo(url).send({ from: accounts[0] });
    console.log(buyRes);
    // const balance = await instance.methods.balanceOf(accounts[0]).send({ from: accounts[0] });
    // console.log(balance);
    const link = await instance.methods.tokenURI(1).send({ from: accounts[0] });
    console.log(link);
}
start();