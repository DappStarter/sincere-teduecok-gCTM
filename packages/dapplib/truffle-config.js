require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter occur slab chaos note spice prosper install climb swift stomach'; 
let testAccounts = [
"0x3b55329f8efb198677bce2b2310be2a672b7d54d014eff83bfefaed49b546ade",
"0x9380214bd8b95bccd7da9d4e58cef65542ca9dac305ce14af1f27fd57faca7c2",
"0x41d5e4e5ef0130c3243fbb6bb321fb651332400ef553d13842f8eb16c048ae73",
"0x89b4e2fcd15ff7d022670161b9dc144f5e564c639b518e8ccb1b11e3e5188731",
"0x2a12733b9d9df9ac641ec36d8b1201ec458794df663da8d32ec36cbb90348dc1",
"0x75ec90394f4a8acecd1ba27295cde53f073e4509b84de9a1b70c92394df39e89",
"0xaee25bb149829c5be411e06c39bbf25923c0b7741e08edc776b256ab2d0411f5",
"0x5634f90d6f0efa52163ae751a80c32eae3bc497a88883ce23f205844cbad9e74",
"0x0e465013307956d4cb6b72db193c45c64bdcaad6a84765d902185ce8958cf4ca",
"0x8cfd05f6965acd81f70c8a20d895dd843011c1e02cafc9f98a202955213493f4"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


