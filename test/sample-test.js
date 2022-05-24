const { expect } = require('chai')
const { ethers } = require('hardhat')

describe('Bank', async function () {
  it('Should deposit money in bank', async function () {
    const Bank = await ethers.getContractFactory('Bank')
    const bank = await Bank.deploy('My bank')
    await bank.deployed()
    await bank.deposit(1000000000000000000)

    const posts = await blog.fetchPosts()
    expect(await bank.checkAssets()).to.equal(1000000000000000000)
  })
})
