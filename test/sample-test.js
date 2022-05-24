const { expect } = require('chai')
const { ethers } = require('hardhat')

describe('Bank', async function () {
  it('Should deposit money in bank', async function () {
    // const Token = await ethers.getContractFactory("Token");
    // const hardhatToken = await Token.deploy();
    // const ownerBalance = await hardhatToken.balanceOf(owner.address);
    // expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);

    const Bank = await ethers.getContractFactory('Bank')
    const bank = await Bank.deploy()
    await bank.deployed()

    await bank.deposit()
    // const assets = await bank.fetchPosts()
    expect(await bank.checkAssets()).to.equal(0)
  })
})
