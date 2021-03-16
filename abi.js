const abi = [
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "f",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_ticketno",
          "type": "uint256"
        }
      ],
      "name": "store",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "l",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_ticketno",
          "type": "uint256"
        }
      ],
      "name": "ltime",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_ticketno",
          "type": "uint256"
        }
      ],
      "name": "retrieve",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ]