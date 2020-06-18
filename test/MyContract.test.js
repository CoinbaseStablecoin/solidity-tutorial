const MyContract = artifacts.require("MyContract");

contract("MyContract", (accounts) => {
  it("can be initialized", async () => {
    await MyContract.new({ from: accounts[0] });
  });
});
