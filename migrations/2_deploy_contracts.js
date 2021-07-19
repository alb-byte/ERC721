const TestFactory = artifacts.require("TestFactory");

module.exports = function (deployer) {
  deployer.deploy(TestFactory);
};

// const { deployProxy } = require('@openzeppelin/truffle-upgrades');

// const TestToken = artifacts.require("TestToken");
// module.exports = async function (deployer) {
//   const instance = await deployProxy(TestToken, [42], { deployer });
//   console.log('Deployed', instance.address);
// };