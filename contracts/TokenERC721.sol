// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

import "../node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "../node_modules/@openzeppelin/contracts/access/Ownable.sol";
import "./TokenERC20.sol";

contract TokenERC721 is ERC721, Ownable {

    uint256 nextId = 0;

    mapping (uint => string) private _tokenUri;

    event BuyToken(uint tokenId, bool success);
    event GetPrice(uint tokenId, address owner, uint price);

    TokenERC20 private erc20Token; 

    constructor(string memory _name, string memory _symbol, address _erc20Token) ERC721(_name, _symbol) {
        erc20Token = TokenERC20(_erc20Token);
    }

    function getTokenDetails(uint256 tokenId) public view returns(string memory) {
        return _tokenUri[tokenId];
    }

    function mint(string memory uri) public onlyOwner {
        _tokenUri[nextId] = uri;
        _safeMint(msg.sender, nextId);
        nextId++;
    }

    function earnErc20(address reciever ,uint amount) private {
        erc20Token.mint(reciever, amount);
    }

    function getAllTokenForUser() public view returns(uint256[] memory) {
        uint256 tokenCount = balanceOf(msg.sender);
        if (tokenCount == 0) {
            return new uint256[](0);
        } else {
            uint[] memory result = new uint256[](tokenCount);
            uint256 total = nextId;
            uint256 resultIndex = 0;
            uint256 i;
            for (i = 0; i < total; i++) {
                if (ownerOf(i) == msg.sender) {
                    result[resultIndex] = i;
                    resultIndex++;
                }
            }
            return result;
        }
    }

    function getAllNotOwnToken() public view returns(uint256[] memory) {
        address owner = owner();
        uint256 tokenCount = balanceOf(owner);
        if (tokenCount == 0) {
            return new uint256[](0);
        } else {
            uint[] memory result = new uint256[](tokenCount);
            uint256 total = nextId;
            uint256 resultIndex = 0;
            uint256 i;
            for (i = 0; i < total; i++) {
                if (ownerOf(i) == owner) {
                    result[resultIndex] = i;
                    resultIndex++;
                }
            }
            return result;
        }
    }

    function buyToken(uint tokenId) public payable returns (bool) {
        require(msg.value > 0.5 ether, "Please send more ether");
        address owner = owner();
        require(ownerOf(tokenId) == owner, "This token belong to someone");
        _safeTransfer(owner, msg.sender, tokenId, "");
        emit BuyToken(tokenId, true);
        return true;
    }

    function getBalanceOferc20(address account) public view returns (uint) {
        return erc20Token.balanceOf(account);
    }

    function getPrice(uint tokenId) public {
        address owner = ownerOf(tokenId);
        erc20Token.mint(owner, 1000);
        emit GetPrice(tokenId, owner, 1000);
    }
}