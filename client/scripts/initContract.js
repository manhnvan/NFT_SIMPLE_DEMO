var App = {
    loading: false,
    contracts: {},
    account: null,

    load: async () => {
        await App.loadWeb3()
        await App.loadAccount()
        await App.loadContract()
        await App.getTokenDetail(1)
        await App.getBalance(App.account)
    },

    loadWeb3: async () => {
        if (typeof web3 !== 'undefined') {
            App.web3Provider = web3.currentProvider
            web3 = new Web3(web3.currentProvider)
        } else {
            window.alert("Please connect to Metamask.")
        }
          // Modern dapp browsers...
        if (window.ethereum) {
            window.web3 = new Web3(ethereum)
            try {
                // Request account access if needed
                await ethereum.enable()
                // Acccounts now exposed
                web3.eth.sendTransaction({/* ... */})
            } catch (error) {
              // User denied account access...
            }
        }
          // Legacy dapp browsers...
        else if (window.web3) {
            App.web3Provider = web3.currentProvider
            window.web3 = new Web3(web3.currentProvider)
            // Acccounts always exposed
            web3.eth.sendTransaction({/* ... */})
        }
        // Non-dapp browsers...
        else {
            console.log('Non-Ethereum browser detected. You should consider trying MetaMask!')
        }
    },
    loadAccount: async () => {
        // Set the current blockchain account
        const accounts = await web3.eth.getAccounts() 
        App.account = accounts[0]
    },
    loadContract: async () => {
        // Create a JavaScript version of the smart contract
        const erc721 = await $.getJSON('../build/contracts/TokenERC721.json')
        App.contracts.erc721 = TruffleContract(erc721)
        App.contracts.erc721.setProvider(App.web3Provider)
        // Hydrate the smart contract with values from the blockchain
        App.erc721 = await App.contracts.erc721.deployed()
    },

    getAllTokenForUser: async () => {
        const tokens = await App.erc721.getAllTokenForUser({from: App.account});
        const tokenIds = tokens.map(token => token.toNumber());
        return tokenIds
    },

    getAllNotOwnToken: async () => {
        const tokens = await App.erc721.getAllNotOwnToken({from: App.account});
        const tokenIds = tokens.map(token => token.toNumber());
        return tokenIds
    },

    getTokenDetail: async (tokenId) => {
        const cid = await App.erc721.getTokenDetails(tokenId);
        const detail = await axios.get(`https://ipfs.io/ipfs/${cid}`)
        return detail;
    },

    getBalance: async (address) => {
        const balance = await App.erc721.balanceOf(address);
        return balance.toNumber()
    },

    buyToken: async (tokenId) => {
        const amount = web3.utils.toWei('1', "ether");
        const tx = await App.erc721.buyToken(tokenId, {from: App.account, value: amount})
        const result = await App.erc721.getPastEvents('BuyToken', {})
        const {returnValues} = result[0]
        return returnValues
    }

}

$(() => {
    $(window).load(() => {
        App.load()
    })
})