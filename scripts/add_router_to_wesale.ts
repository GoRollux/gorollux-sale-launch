import { ethers } from 'hardhat'
import { ParametersStruct } from '../typechain-types/contracts/WESaleFactory'

async function main() {
  const routerAddress = '0x4dB158Eec5c5d63F9A09535882b835f36d3fd012' // rollux v3 pegasys
  //   const routerAddress = '0x0d476148769E4CF5AFFB59e5552cAC8a30D13669' // rollux pegasys
  //   const routerZeroAddress = '0x0000000000000000000000000000000000000000'

  //   // feeTod
  //   const feeTo = '0xc7816AB57762479dCF33185bad7A1cFCb68a7997'
  //   const signer = '0x39AD2809F73086A63Ab2F0D8D689D1cc02579abA'

  //   const ownerAddress = '0xAcdC274B853e01e9666E03c662d30A83B8F73080'

  //   const [owner, founder] = await ethers.getSigners()
  //   //   console.log(owner.address, founder.address)
  //   const presaleToken = await ethers.getContractAt(
  //     'TestERC20',
  //     '0x7cd80D52fD832C24D51bB842b7A8D666a9EeCE9F' // syscoin
  //     // '0x7cd80D52fD832C24D51bB842b7A8D666a9EeCE9F' // rollux
  //     // '0x4C7Ac2e4AC328BB5162CBB45cC6bEAC910F4d37a' // rollux testnet
  //   )
  //   const investToken = ethers.utils.getAddress(
  //     '0x0000000000000000000000000000000000000000'
  //   )

  const wesaleFactory = await ethers.getContractAt(
    'WESaleFactory',
    '0xf97a231da6e5340e3ada60c5798dee26ce0d594c'
  )
  //   const wesaleFactory = await WESaleFactory.deploy(feeTo, signer)
  //   //   272198957858
  //   //   2500000000
  //   await wesaleFactory.deployed()
  //   console.log(`WESale deployed to ${wesaleFactory.address}`)
  //   const adminBytes = ethers.utils.id('ADMIN_ROLE')
  const dexRouterBytes = ethers.utils.id('DEX_ROUTER')
  //   const dexRouterSetterBytes = ethers.utils.id('DEX_ROUTER_SETTER_ROLE')
  //   await wesaleFactory.grantRole(dexRouterSetterBytes, owner.address)
  //   console.log(
  //     'complete grant routerSetter role to owner: dexRouterSetterBytes: ',
  //     dexRouterSetterBytes
  //   )
  //   await sleep(600000)
  await wesaleFactory.grantRole(dexRouterBytes, routerAddress)

  console.log(
    'complete grant router role to routerAddress: dexRouterBytes: ',
    dexRouterBytes
  )

  //   await wesaleFactory.grantRole(adminBytes, ownerAddress)
  //   console.log(
  //     'complete grant router role to routerAddress: adminRole: ',
  //     ownerAddress
  //   )
  //   await sleep(1000)
  //   await wesaleFactory.transferOwnership(ownerAddress)
  //   console.log('transferOwnership: ', ownerAddress)
  //   await sleep(5000)

  //   const startedAt = Math.floor(new Date().getTime() / 1000)
  //   const endedAt = startedAt + 3600
  //   const presalePerPrice = ethers.utils.parseUnits('10', 18)
  //   const presalePerDexInitPrice = ethers.utils.parseUnits('20', 18)
  //   const sortCap = ethers.utils.parseUnits('0.5', 18)
  //   const hardCap = ethers.utils.parseUnits('1', 18)
  //   const minInvest = ethers.utils.parseUnits('0.1', 18)
  //   const maxInvest = ethers.utils.parseUnits('1', 18)
  //   const liquidityRate = ethers.BigNumber.from(700000)
  //   const firstRelease = ethers.BigNumber.from(300000)
  //   const cycle = ethers.BigNumber.from(60)
  //   const cycleRelease = ethers.BigNumber.from(200000)
  //   const parameters: ParametersStruct = {
  //     price: presalePerPrice,
  //     liquidityRate: liquidityRate,
  //     minInvest: minInvest,
  //     maxInvest: maxInvest,
  //     softCap: sortCap,
  //     hardCap: hardCap,
  //     router: routerAddress,
  //     dexInitPrice: presalePerDexInitPrice,
  //     startedAt: ethers.BigNumber.from(startedAt),
  //     endedAt: ethers.BigNumber.from(endedAt),
  //     firstRelease: firstRelease,
  //     cycle: cycle,
  //     cycleRelease: cycleRelease,
  //     investTokenDecimals: ethers.BigNumber.from(0),
  //   }
  //   const allowPresaleTokenAmount = presalePerPrice
  //     .mul(hardCap)
  //     .div(ethers.utils.parseUnits('1', 18))
  //     .add(
  //       hardCap
  //         .mul(liquidityRate)
  //         .mul(presalePerDexInitPrice)
  //         .div(1000000)
  //         .div(ethers.utils.parseUnits('1', 18))
  //     )
  //   await presaleToken
  //     .connect(founder)
  //     .approve(wesaleFactory.address, allowPresaleTokenAmount)

  //   //   const tx = await wesaleFactory
  //   //     .connect(founder)
  //   //     .createSale(
  //   //       teamWallet.address,
  //   //       presaleToken.address,
  //   //       investTokenA.address,
  //   //       parameters
  //   //     )
  //   const tx = await wesaleFactory
  //     .connect(founder)
  //     .createSale(founder.address, presaleToken.address, investToken, parameters)
  //   console.log(tx)
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
