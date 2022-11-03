import { expect } from "chai"
import { ethers, deployments, getNamedAccounts } from "hardhat"

const AddressZero = "0x0000000000000000000000000000000000000000"
const AddressOne = "0x0000000000000000000000000000000000000001"

const setup = async () => {
  await deployments.fixture(["OZGovernorModule"])
  const { tester } = await getNamedAccounts()
  const testSigner = await ethers.getSigner(tester)
  const Avatar = await ethers.getContractFactory("TestAvatar")
  const avatar = await Avatar.deploy()
  const OZGovernorModuleFactory = await ethers.getContractFactory("OZGovernorModule")
  const ozGovernorModule = await OZGovernorModuleFactory.deploy(
    testSigner.address,
    avatar.address,
    avatar.address,
    AddressOne,
    "Test Governor",
    1,
    60,
    0,
    1,
  )
  // const OZGovernorModuleDeployment = await deployments.get("OZGovernorModule")
  // const OZGovernorModuleContract = await ethers.getContractAt(
  //   "OZGovernorModule",
  //   OZGovernorModuleDeployment.address,
  //   testSigner,
  // )
  return { ozGovernorModule, testSigner }
}

describe("OZGovernorModule", function () {
  describe("Constructor", function () {
    it("Successfully deploys contract", async function () {
      expect(await setup())
    })
  })
})