const TokenERC20 = artifacts.require("TokenERC20");
const TokenERC721 = artifacts.require("TokenERC721");
const fs = require('fs');
metadata = require('./metadata.json') 

module.exports = async function (deployer) {
    await deployer.deploy(TokenERC20, "NFT CURRENCY", "NFTC");
    let instance = await TokenERC20.deployed()
    const TokenERC721Deployed = await deployer.deploy(TokenERC721, "NFT GAME", "NFTG", instance.address);
    let ERC721Instance = await TokenERC721.deployed()
    Promise.all(metadata.map(element => {
        return ERC721Instance.mint(element.uri)
    }))
};
