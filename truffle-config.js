require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');
const { API_URL, MNEMONIC } = process.env;

module.exports = {
  plugins: ['truffle-plugin-verify'],
  api_keys: {
    etherscan: '2PEHJ498MVXG6B8Z8GVX8MW8CGCIS6H7GI',
  },
  networks: {
    development: {
      host: '127.0.0.1', // Localhost (default: none)
      port: 8545, // Standard Ethereum port (default: none)
      network_id: '*', // Any network (default: none)
    },
    rinkeby: {
      provider: function () {
        return new HDWalletProvider(MNEMONIC, API_URL);
      },
      network_id: 4,
      gas: 5500000,
    },
    // goerli: {
    //   provider: function () {
    //     return new HDWalletProvider(MNEMONIC, API_URL);
    //   },
    //   network_id: 5,
    //   gas: 5500000,
    // },
    // ropsten: {
    //   provider: function () {
    //     return new HDWalletProvider(MNEMONIC, API_URL);
    //   },
    //   network_id: 3, // Ropsten's id
    //   gas: 5500000, // Ropsten has a lower block limit migrations? (default: false for public nets )
    // },
    // Another network with more advanced options...
    // advanced: {
    // port: 8777,             // Custom port
    // network_id: 1342,       // Custom network
    // gas: 8500000,           // Gas sent with each transaction (default: ~6700000)
    // gasPrice: 20000000000,  // 20 gwei (in wei) (default: 100 gwei)
    // from: <address>,        // Account to send txs from (default: accounts[0])
    // websocket: true        // Enable EventEmitter interface for web3 (default: false)
    // },
    // Useful for deploying to a public network.
    // NB: It's important to wrap the provider as a function.
    // ropsten: {
    // provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/YOUR-PROJECT-ID`),
    // network_id: 3,       // Ropsten's id
    // gas: 5500000,        // Ropsten has a lower block limit than mainnet
    // confirmations: 2,    // # of confs to wait between deployments. (default: 0)
    // timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
    // skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    // },
    // Useful for private networks
    // private: {
    // provider: () => new HDWalletProvider(mnemonic, `https://network.io`),
    // network_id: 2111,   // This network is yours, in the cloud.
    // production: true    // Treats this network as if it was a public net. (default: false)
    // }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: '0.8.11', // Fetch exact version from
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },

  // Truffle DB is currently disabled by default; to enable it, change enabled:
  // false to enabled: true. The default storage location can also be
  // overridden by specifying the adapter settings, as shown in the commented code below.
  //
  // NOTE: It is not possible to migrate your contracts to truffle DB and you should
  // make a backup of your artifacts to a safe location before enabling this feature.
  //
  // After you backed up your artifacts you can utilize db by running migrate as follows:
  // $ truffle migrate --reset --compile-all
  //
  // db: {
  // enabled: false,
  // host: "127.0.0.1",
  // adapter: {
  //   name: "sqlite",
  //   settings: {
  //     directory: ".db"
  //   }
  // }
  // }
};
