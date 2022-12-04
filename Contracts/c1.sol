// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "https://github.com/smartcontractkit/chainlink/blob/develop/contracts/src/v0.8/interfaces/LinkTokenInterface.sol";


// Token Address : 0xB7181F248E816798aCDb77EeceeE0FF715899411

// 
// Network : Matic
// Matic chainlink Address : 0x326C977E6efc84E512bB9C30f76E30c160eD06FB


contract CarbonCreditPool is ERC20 {
    address public tokenAddress;
    address public linkAddress;

    // STORAGE
    IERC20 link;
    LinkTokenInterface LINK;

    // events
    event TokenPurchase(address indexed buyer, uint256 indexed linkSold, uint256 tokenBought);
    event LinkPurchase(address indexed buyer, uint256 indexed tokenSold, uint256 linkBought);

    event AddLiquidity(
        address indexed provider,
        uint256 indexed linkAmount,
        uint256 indexed tokenAmount
    );

    event RemoveLiquidity(
        address indexed provider,
        uint256 indexed linkAmount,
        uint256 indexed tokenAmount
    );

    // Adding carbon to the carbon pool
    // In exchange Link transfered 
    
    constructor(address token, address link) ERC20("Farm Carbon Token", "FCT") {
        require(token != address(0), "invalid token address");
        tokenAddress = token;
        linkAddress = link;
        // factoryAddress = msg.sender;
    }

    function addLiquidity(uint256 tokenAmount) public payable returns (uint256 poolTokenAmount) {
        (uint256 tokenReserve, uint256 linkReserve) = getReserves();
        // farmer carbon token
        IERC20 token = IERC20(tokenAddress);
        token.transferFrom(msg.sender, address(this), tokenAmount);


        // link token
        LINK = LinkTokenInterface(linkAddress);
        LINK.transfer(msg.sender, tokenAmount);
        poolTokenAmount = linkReserve;
        emit AddLiquidity(msg.sender, msg.value, tokenAmount);
    }

    function getReserves() public view returns (uint256 tokenReserve, uint256 linkReserve) {
        // Retrieve reserves
        tokenReserve = IERC20(tokenAddress).balanceOf(address(this));
        linkReserve = LinkTokenInterface(linkAddress).balanceOf(address(this));
    }

}