const path = require("path");
module.exports = {
  contracts_build_directory: path.join(__dirname, "client/contracts"),
  networks: {
    develop: {
      port: 8545,
      host: "127.0.0.1",
      network_id: "*",
      gas: 10000000000,
      from: "0xA1ba9AE4E10105FE392b2a2387A8e3536aA5D8B6",
    },

  },
  compilers: {
    solc: {
      version: "^0.8.5"
    }
  }
}
