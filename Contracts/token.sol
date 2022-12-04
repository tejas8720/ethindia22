/ SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

// 0xBcc4EcebEfe57A0098bF5749Ed7Fa45A6656fe11
// 0x418985AeeA09196f9CACeaF9686f7C4B6500cb58

/**
 * THIS IS AN EXAMPLE CONTRACT WHICH IS NOT AUDITED
 * PLEASE DO NOT USE THIS CODE IN PRODUCTION.
 */
contract Token is ERC20 {
    constructor(
        string memory name,
        string memory symbol,
        uint256 initialSupply
    ) ERC20(name, symbol) {
        _mint(address(this), initialSupply);
    }

    IERC20 token;
}