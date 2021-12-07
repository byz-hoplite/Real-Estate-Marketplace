# Udacity Blockchain Capstone

The capstone will build upon the knowledge you have gained in the course in order to build a decentralized housing product. 

# Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)

## Install
```
  npm install
```

## Testing
```
  cd eth-contracts
  truffle test
```


## Address of owner
https://rinkeby.etherscan.io/address/0xe2b0D810F5441C6C7be11a03a8a14B69BA351417

## Address of buyer
https://rinkeby.etherscan.io/address/0xdECcee9EC1376d16Ea83D7b82bE68af80161Ed98

## Contract Addresses RealEstateToken
https://rinkeby.etherscan.io/address/0x31c0fDF33E841d45f67fAe75A492d22711f9540B

## Contract Addresses SquareVerifier
https://rinkeby.etherscan.io/address/0x0d03f12D8197F91d13C2766eBC9fcD0a3859Ecc2

## Contract Addresses SolnSquareVerifier
https://rinkeby.etherscan.io/address/0x0d03f12D8197F91d13C2766eBC9fcD0a3859Ecc2

## OpenSea MarketPlace Storefront
https://testnets.opensea.io/0xe2b0D810F5441C6C7be11a03a8a14B69BA351417

## Contract Abi's
```
./eth-contracts/build/contracts
```



Migrations dry-run (simulation)
===============================
> Network name:    'rinkeby-fork'
> Network id:      4
> Block gas limit: 29970649 (0x1c950d9)


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > block number:        9768271
   > block timestamp:     1638807713
   > account:             0xe2b0D810F5441C6C7be11a03a8a14B69BA351417
   > balance:             18.704007698734630416
   > gas used:            210237 (0x3353d)
   > gas price:           2 gwei
   > value sent:          0 ETH
   > total cost:          0.000420474 ETH

   -------------------------------------
   > Total cost:         0.000420474 ETH


2_deploy_contracts.js
=====================

   Deploying 'RealEstateToken'
   ---------------------------
   > block number:        9768273
   > block timestamp:     1638807736
   > account:             0xe2b0D810F5441C6C7be11a03a8a14B69BA351417
   > balance:             18.698688704734630416
   > gas used:            2632134 (0x2829c6)
   > gas price:           2 gwei
   > value sent:          0 ETH
   > total cost:          0.005264268 ETH


   Deploying 'SquareVerifier'
   --------------------------
   > block number:        9768274
   > block timestamp:     1638807748
   > account:             0xe2b0D810F5441C6C7be11a03a8a14B69BA351417
   > balance:             18.696753802734630416
   > gas used:            967451 (0xec31b)
   > gas price:           2 gwei
   > value sent:          0 ETH
   > total cost:          0.001934902 ETH


   Deploying 'SolnSquareVerifier'
   ------------------------------
   > block number:        9768275
   > block timestamp:     1638807770
   > account:             0xe2b0D810F5441C6C7be11a03a8a14B69BA351417
   > balance:             18.689942766734630416
   > gas used:            3405518 (0x33f6ce)
   > gas price:           2 gwei
   > value sent:          0 ETH
   > total cost:          0.006811036 ETH

   -------------------------------------
   > Total cost:         0.014010206 ETH


Summary
=======
> Total deployments:   4
> Final cost:          0.01443068 ETH





Starting migrations...
======================
> Network name:    'rinkeby'
> Network id:      4
> Block gas limit: 29999860 (0x1c9c2f4)


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0xae1b29766c7a25d0c2686bab40c372201a61208d5d31631be77ea6df7a0e48a9
   > Blocks: 1            Seconds: 16
   > contract address:    0x178A15A33F94d691204577740e59e94744D560F2
   > block number:        9768276
   > block timestamp:     1638807798
   > account:             0xe2b0D810F5441C6C7be11a03a8a14B69BA351417
   > balance:             18.704201635732591583
   > gas used:            226537 (0x374e9)
   > gas price:           1.000000009 gwei
   > value sent:          0 ETH
   > total cost:          0.000226537002038833 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:     0.000226537002038833 ETH


2_deploy_contracts.js
=====================

   Deploying 'RealEstateToken'
   ---------------------------
   > transaction hash:    0x304cfc5cadeb2eb2d01206dd5cdc9bd75d7ceef238c134bb5fcbc7ed3e87bc0f
   > Blocks: 1            Seconds: 12
   > contract address:    0x31c0fDF33E841d45f67fAe75A492d22711f9540B
   > block number:        9768278
   > block timestamp:     1638807828
   > account:             0xe2b0D810F5441C6C7be11a03a8a14B69BA351417
   > balance:             18.70136123870702801
   > gas used:            2794634 (0x2aa48a)
   > gas price:           1.000000009 gwei
   > value sent:          0 ETH
   > total cost:          0.002794634025151706 ETH


   Deploying 'SquareVerifier'
   --------------------------
   > transaction hash:    0x9d3360b779ffd73789d6fa702705c683303dc50fffb3ce2dca1c58e7457105ed
   > Blocks: 0            Seconds: 8
   > contract address:    0x646CBE69402E4d9250357803725B4D83920b82a3
   > block number:        9768279
   > block timestamp:     1638807843
   > account:             0xe2b0D810F5441C6C7be11a03a8a14B69BA351417
   > balance:             18.700393787698320951
   > gas used:            967451 (0xec31b)
   > gas price:           1.000000009 gwei
   > value sent:          0 ETH
   > total cost:          0.000967451008707059 ETH


   Deploying 'SolnSquareVerifier'
   ------------------------------
   > transaction hash:    0x7aeb350d02b5d9d1e69639c3131dd8edfde649eab5779392542fd7d21c67f27e
   > Blocks: 1            Seconds: 12
   > contract address:    0x0d03f12D8197F91d13C2766eBC9fcD0a3859Ecc2
   > block number:        9768280
   > block timestamp:     1638807858
   > account:             0xe2b0D810F5441C6C7be11a03a8a14B69BA351417
   > balance:             18.696809469666062089
   > gas used:            3584318 (0x36b13e)
   > gas price:           1.000000009 gwei
   > value sent:          0 ETH
   > total cost:          0.003584318032258862 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:     0.007346403066117627 ETH


Summary
=======
> Total deployments:   4
> Final cost:          0.00757294006815646 ETH




## Contract Abi's
```
./eth-contracts/build/contracts
```

## SolnSquareVerifier Contract Abi's
[
    {
      "constant": true,
      "inputs": [],
      "name": "squareContract",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getSymbol",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "paused",
          "type": "bool"
        }
      ],
      "name": "setPaused",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getName",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "from",
          "type": "address"
        },
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_myid",
          "type": "bytes32"
        },
        {
          "name": "_result",
          "type": "string"
        }
      ],
      "name": "__callback",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "owner",
          "type": "address"
        },
        {
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenOfOwnerByIndex",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_myid",
          "type": "bytes32"
        },
        {
          "name": "_result",
          "type": "string"
        },
        {
          "name": "_proof",
          "type": "bytes"
        }
      ],
      "name": "__callback",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getTokenURI",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "mint",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "from",
          "type": "address"
        },
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenByIndex",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "getOwner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "from",
          "type": "address"
        },
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getBaseTokenURI",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "owner",
          "type": "address"
        },
        {
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "verifierAddress",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "to",
          "type": "address"
        }
      ],
      "name": "SolutionAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "approved",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "Paused",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "Unpaused",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwershipTransfer",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_tokenId",
          "type": "uint256"
        },
        {
          "name": "_key",
          "type": "bytes32"
        }
      ],
      "name": "addSolution",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_tokenId",
          "type": "uint256"
        },
        {
          "name": "a",
          "type": "uint256[2]"
        },
        {
          "name": "b",
          "type": "uint256[2][2]"
        },
        {
          "name": "c",
          "type": "uint256[2]"
        },
        {
          "name": "input",
          "type": "uint256[2]"
        }
      ],
      "name": "mintToken",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_tokenId",
          "type": "uint256"
        },
        {
          "name": "a",
          "type": "uint256[2]"
        },
        {
          "name": "b",
          "type": "uint256[2][2]"
        },
        {
          "name": "c",
          "type": "uint256[2]"
        },
        {
          "name": "input",
          "type": "uint256[2]"
        }
      ],
      "name": "IsMintable",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]

# Project Resources
* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)