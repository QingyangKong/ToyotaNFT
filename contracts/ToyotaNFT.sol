// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@chainlink/contracts/src/v0.8/automation/AutomationCompatible.sol";

contract ToyotaNFT is ERC721URIStorage, Ownable, AutomationCompatible {
    
    string public constant METADATA_RED_CAR = "https://ipfs.filebase.io/ipfs/QmW5oSpyoLitgNYqycXDKiqAhdvYfXLmpEjnMU4huX2yTN";
    string public constant METADATA_SILVER_CAR = "https://ipfs.filebase.io/ipfs/QmTKM8VwowuisNK4B1qNjGoNweCrnKjTWT4aGvLmCDqYoY";
    string public constant METADATA_YELLOW_CAR = "https://ipfs.filebase.io/ipfs/QmcEBCeb8srWi96Bq2RfbkKGZjFVkUqVWa27w4XqxtZAn9";

    uint256 private _tokenIds;
    uint256 public timestamp;

    mapping (uint256 => uint8) tokenIdToColor;

    constructor(address initialOwner) ERC721("ToyotaCars", "TCAR") Ownable(initialOwner){}

    function mintCar() public {
        uint256 tokenId = _tokenIds;
        _safeMint(msg.sender, tokenId);
        _setTokenURI(tokenId, METADATA_RED_CAR);
        tokenIdToColor[tokenId] = 0;
        _tokenIds++;
    }

    function updateTokenMetadata() public {
        for(uint256 i = 0; i < _tokenIds; i++) {
            if(tokenIdToColor[i] == 0) {
                _setTokenURI(i, METADATA_SILVER_CAR);
                tokenIdToColor[i] = 1;
            } else if(tokenIdToColor[i] == 1) {
                _setTokenURI(i, METADATA_YELLOW_CAR);
                tokenIdToColor[i] = 2;
            } else {
                _setTokenURI(i, METADATA_RED_CAR);
                tokenIdToColor[i] = 0;
            }
        }
    }

    function checkUpkeep(bytes calldata /* checkData */) 
        external 
        view 
        override 
        returns(bool upkeepNeeded, bytes memory /* performData */) {
            upkeepNeeded = block.timestamp - timestamp > 120;
            
    }

    function performUpkeep(bytes calldata /* perfromData */) external override {
        require(block.timestamp - timestamp > 120);
        timestamp = block.timestamp;
        updateTokenMetadata();
    }
}