const path = require("path");

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    develop: {
      host: "127.0.0.1", // localhost de notre réseau ganache 
      port: 7545, // le port rpc de notre réseau ganache 
      network_id: "5777",// le network id de notre réseau ganache 
    },

    ropsten: {
      provider: function() {
        return new HDWalletProvider(process.env.MNEMONIC, `https://ropsten.infura.io/v3/${process.env.INFURA_API_KEY}`)
      },
      gasPrice: 25000000000,
      network_id: "3",
    }
  },

  // Configure your compilers
  compilers: {
    solc: {
        version: "0.8.0",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
        settings: {          // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: false,
          runs: 200
        },
      //  evmVersion: "byzantium"
        }
    }
  },
};
