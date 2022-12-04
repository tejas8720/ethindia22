/// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// import "https://github.com/smartcontractkit/chainlink/blob/master/evm-contracts/src/v0.8/LinkToken.sol";

// Carbon Credit smart contract
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


contract Exchange is ERC20 {
    address public tokenAddress;
    address public creditAddress;

    constructor(address token) ERC20("Carbon swap", "CSWAP-V1") {
        require(token != address(0), "invalid token address");
        tokenAddress = token;
        creditAddress = msg.sender;
    }

    function addLiquidity(uint256 tokenAmount) public payable returns (uint256 poolTokenAmount) {
        IERC20 token = IERC20(tokenAddress);
        token.transferFrom(msg.sender, address(this), tokenAmount);
    }

    function transferToken(uint256 tokenAmount) public payable returns (uint256 poolTokenAmount) {
        IERC20 token = IERC20(creditAddress);
        token.transferFrom(address(this), msg.sender, tokenAmount);
    }

}