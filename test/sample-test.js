const { expect } = require('chai')
const { ethers } = require('hardhat')

describe('Bank', async function () {
  it('Should deposit 10ETH in bank', async function () {
    // const Token = await ethers.getContractFactory("Token");
    // const hardhatToken = await Token.deploy();
    // const ownerBalance = await hardhatToken.balanceOf(owner.address);
    // expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
    ;[owner, addr1] = await ethers.getSigners()
    console.log('owner.address', owner.address)
    const Bank = await ethers.getContractFactory('Bank')
    const bank = await Bank.deploy()
    await bank.deployed()

    await bank.deposit({ value: ethers.utils.parseEther('10') })
    // const assets = await bank.fetchPosts()
    expect(await bank.checkAssets()).to.equal(ethers.utils.parseEther('10'))
  })
})
