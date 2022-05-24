const { expect } = require('chai')
const { ethers } = require('hardhat')

describe('Bank', async function () {
  it('Should deposit 10ETH in bank', async function () {
    ;[owner] = await ethers.getSigners()
    const Bank = await ethers.getContractFactory('Bank')
    const bank = await Bank.deploy()
    await bank.deployed()
    console.log('owner.address', owner.address)
    await bank.deposit({ value: ethers.utils.parseEther('10') })
    expect(await bank.checkAssets()).to.equal(ethers.utils.parseEther('10'))
  })

  it('Should add 20 ETH and withdraw 10ETH in bank', async function () {
    ;[owner] = await ethers.getSigners()
    const Bank = await ethers.getContractFactory('Bank')
    const bank = await Bank.deploy()
    await bank.deployed()
    await bank.deposit({ value: ethers.utils.parseEther('20') })
    console.log('owner.address', owner.address)
    await bank.withdraw(ethers.utils.parseEther('10'))
    expect(await bank.checkAssets()).to.equal(ethers.utils.parseEther('10'))
  })
})
