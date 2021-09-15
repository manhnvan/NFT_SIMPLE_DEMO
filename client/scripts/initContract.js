var ERC721Sm = {
    loading: false,
    contracts: {},
    account: null,

    load: async () => {
        await ERC721Sm.loadWeb3()
        await ERC721Sm.loadAccount()
        await ERC721Sm.loadContract()
        await ERC721Sm.getBalance(ERC721Sm.account)
    },

    loadWeb3: async () => {
        if (typeof web3 !== 'undefined') {
            ERC721Sm.web3Provider = web3.currentProvider
            web3 = new Web3(web3.currentProvider)
        } else {
            window.alert("Please connect to Metamask.")
        }
          // Modern dERC721Sm browsers...
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
          // Legacy dERC721Sm browsers...
        else if (window.web3) {
            ERC721Sm.web3Provider = web3.currentProvider
            window.web3 = new Web3(web3.currentProvider)
            // Acccounts always exposed
            web3.eth.sendTransaction({/* ... */})
        }
        // Non-dERC721Sm browsers...
        else {
            console.log('Non-Ethereum browser detected. You should consider trying MetaMask!')
        }
    },
    loadAccount: async () => {
        // Set the current blockchain account
        const accounts = await web3.eth.getAccounts() 
        ERC721Sm.account = accounts[0]
    },
    loadContract: async () => {
        // Create a JavaScript version of the smart contract
        const erc721 = await $.getJSON('../build/contracts/TokenERC721.json')
        ERC721Sm.contracts.erc721 = TruffleContract(erc721)
        ERC721Sm.contracts.erc721.setProvider(ERC721Sm.web3Provider)
        // Hydrate the smart contract with values from the blockchain
        ERC721Sm.erc721 = await ERC721Sm.contracts.erc721.deployed()
    },

    getAllTokenForUser: async () => {
        const tokens = await ERC721Sm.erc721.getAllTokenForUser({from: ERC721Sm.account});
        const tokenIds = tokens.map(token => token.toNumber());
        return tokenIds
    },

    getAllNotOwnToken: async () => {
        const tokens = await ERC721Sm.erc721.getAllNotOwnToken({from: ERC721Sm.account});
        const tokenIds = tokens.map(token => token.toNumber());
        return tokenIds
    },

    getTokenDetail: async (tokenId) => {
        const cid = await ERC721Sm.erc721.getTokenDetails(tokenId);
        const detail = await axios.get(`https://ipfs.io/ipfs/${cid}`)
        return detail.data;
    },

    getBalance: async (address) => {
        const balance = await ERC721Sm.erc721.balanceOf(address);
        return balance.toNumber()
    },

    buyToken: async (tokenId) => {
        const amount = web3.utils.toWei('1', "ether");
        const tx = await ERC721Sm.erc721.buyToken(tokenId, {from: ERC721Sm.account, value: amount})
        const result = await ERC721Sm.erc721.getPastEvents('BuyToken', {})
        const {returnValues} = result[0]
        return returnValues
    }
}