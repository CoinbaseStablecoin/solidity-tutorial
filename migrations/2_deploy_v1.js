const MyContract = artifacts.require("MyContract");

module.exports = async (deployer, _network) => {
  await deployer.deploy(MyContract);
};
