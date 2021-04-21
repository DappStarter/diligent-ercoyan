require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'good enter bottom solution finger deliver remain purity gloom knock flame sword'; 
let testAccounts = [
"0xd5c26f2f7dea808ed0873e890955edcc48d2effdb5e70d7181d92926596b8838",
"0x46045159dadc9196a2b0ae88ce2db008911ca86a41cfa8b3b82951806a6b46da",
"0x8a47d5cd3633a740f9e8ae8fb81054a09460accb0ce8d4b76b4d09d84e634c7c",
"0x9a7060988fbfbae51066e63b54e98dedef6efaa8e6c399b8b7ed9bd51b350535",
"0x94a109646b698ca32883a2a504acde6e6174aded594007654440c5e7eec73536",
"0xad9f9f0d22c2c7e26b5b05240eb049dab85f0b76b76a959065126f215e34fc04",
"0x15d6271558b90baa8a69abb1d11e6199267bc95321836be3b0d9e441b17140dc",
"0xc5639de16e299915bf6b94a023b91fd9529d2850d6004926def40623ba671ffa",
"0xad6f6d52f658586a40326c03ed5413192da743f9e3ff81032242b09e3413a4ad",
"0xa5184c23463b7f56a2d7b9a14ecfc4ec6ab07ab478513eff483166f1046f0674"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

