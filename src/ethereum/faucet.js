const ethers = require('ethers')

const faucet_abi = [
    {
        'inputs': [
            {
                'internalType': "address",  
                'name': "dai_token_address",
                'type': "address"
            },
            {
                'internalType': "address",
                'name': "stable_token_address",
                'type': "address"
            }
        ],
        'name': "constructor",
        'stateMutability': "payable",
        'type': "constructor"
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': true,
                'internalType': "address",
                'name': "from",
                'type': "address"
            },
            {
                'indexed': true,
                'internalType': "uint256",
                'name': "amount",
                'type': "uint256"
            }
        ],
        'name': "Deposit",
        'type': "event"
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': true,
                'internalType': "address",
                'name': "to",
                'type': "address"
            },
            {
                'indexed': true,
                'internalType': "uint256",
                'name': "amount",
                'type': "uint256"
            }
        ],
        'name': "Withdrawal",
        'type': "event"
    },
    {
        'inputs': [],
        'name': "daiToken",
        'outputs': [
            {
                'internalType': "contract IERC20",
                'name': "",
                'type': "address"
            }
        ],
        'stateMutability': "view",
        'type': "function"
    },
    {
        'inputs': [],
        'name': "dai_getBalance",
        'outputs': [
            {
                'internalType': "uint256",
                'name': "",
                'type': "uint256"
            }
        ],
        'stateMutability': "view",
        'type': "function"
    },
    {
        'inputs': [],
        'name': "lockTime",
        'outputs': [
            {
                'internalType': "uint256",
                'name': "",
                'type': "uint256"
            }
        ],
        'stateMutability': "view",
        'type': "function"
    },
    {
        'inputs': [],
        'name': "requestTokens",
        'outputs': [],
        'stateMutability': "nonpayable",
        'type': "function"
    },
    {
        'inputs': [
            {
                'internalType': "uint256",
                'name': "amount",
                'type': "uint256"
            }
        ],
        'name': "setLockTime",
        'outputs': [],
        'stateMutability': "nonpayable",
        'type': "function"
    },
    {
        'inputs': [
            {
                'internalType': "uint256",
                'name': "amount",
                'type': "uint256"
            }
        ],
        'name': "setWithdrawalAmount",
        'outputs': [],
        'stateMutability': "nonpayable",
        'type': "function"
    },
    {
        'inputs': [],
        'name': "stableToken",
        'outputs': [
            {
                'internalType': "contract IERC20",
                'name': "",
                'type': "address"
            }
        ],
        'stateMutability': "view",
        'type': "function"
    },
    {
        'inputs': [],
        'name': "stable_getBalance",
        'outputs': [
            {
                'internalType': "uint256",
                'name': "",
                'type': "uint256"
            }
        ],
        'stateMutability': "view",
        'type': "function"
    },
    {
        'inputs': [],
        'name': "withdraw",
        'outputs': [],
        'stateMutability': "nonpayable",
        'type': "function"
    },
    {
        'inputs': [],
        'name': "withdrawalAmount",
        'outputs': [
            {
                'internalType': "uint256",
                'name': "",
                'type': "uint256"
            }
        ],
        'stateMutability': "view",
        'type': "function"
    },
    {
        'stateMutability': "payable",
        'type': "receive"
    }
];


const faucet_contract = (provider) => {
    return new ethers.Contract("0x55e2CDE35E4cc545289646C68F838886c5891a41",faucet_abi,provider);
}

export default faucet_contract;