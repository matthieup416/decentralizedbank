const hre = require('hardhat')
const fs = require('fs')

async function main() {
  // We get the contract to deploy
  const Bank = await hre.ethers.getContractFactory('Bank')
  const bank = await Bank.deploy()

  await bank.deployed()

  console.log('Bank deployed to:', bank.address)
  //* ajout des infos dans le fichier config.js
  fs.writeFileSync(
    './config.js',
    `
  export const contractAddress = "${bank.address}"
  export const ownerAddress = "${bank.signer.address}"
  `
  )
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
