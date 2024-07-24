// SPDX-License-Identifier: GNU
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract UMCToken is ERC20, Ownable {
    uint256 public tvaRate;
    uint256 public totalCollectedTva;

    event TvaCollected(address indexed from, uint256 amount);
    event TvaWithdrawn(address indexed to, uint256 amount);

    mapping(address => uint256) public tvaBalances;

    constructor(uint256 _tvaRate) ERC20("Utility Management Coin", "UMC") {
        tvaRate = _tvaRate;
        totalCollectedTva = 0;
        _mint(msg.sender, 1000000 * 10 ** decimals()); // Mint initial supply to contract owner
    }

    function collectTva(address from, uint256 amount) public {
        uint256 tva = (amount * tvaRate) / 100;
        _transfer(from, address(this), tva);
        tvaBalances[from] += tva;
        totalCollectedTva += tva;
        emit TvaCollected(from, tva);
    }

    function withdrawTva(address to, uint256 amount) public onlyOwner {
        require(amount <= totalCollectedTva, "Not enough TVA collected");
        _transfer(address(this), to, amount);
        totalCollectedTva -= amount;
        emit TvaWithdrawn(to, amount);
    }

    function setTvaRate(uint256 _tvaRate) public onlyOwner {
        tvaRate = _tvaRate;
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
