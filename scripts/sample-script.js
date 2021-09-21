const hre = require("hardhat");

async function traceBalance(msg, hre) {
  console.log(msg);

  const signers = await hre.ethers.getSigners();
  const signer = signers[0];
  const balance = await hre.ethers.provider.getBalance(signer.address);
  console.log(
    signer.address,
    ethers.utils.formatEther(balance)
  );
}

async function main() {
  await traceBalance(1, hre);

  await hre.run('clean');
  await hre.run('compile');

  await traceBalance(2, hre);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
