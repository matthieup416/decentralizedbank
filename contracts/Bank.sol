// TUTO YOUTUBE 
// https://www.youtube.com/watch?v=gND3AL_j4uQ&list=PLoqPVFip_3MfLX8uWxZHsDjmFGS9N9SY7&index=6

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Bank {
mapping(address => uint) public accounts;

modifier hasFunds(uint _amount) {
    require(_amount <= accounts[msg.sender], "Insufficient funds !");
    _;
}
function deposit() public payable {
    accounts[msg.sender] += msg.value;
}

function withdraw(uint _amount) public hasFunds(_amount) {
    payable(msg.sender).transfer(_amount);
}

function checkAssets() public view returns(uint256) {
    return address(this).balance;
}
}