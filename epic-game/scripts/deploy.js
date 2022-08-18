const main = async () => {

    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');

    const gameContract = await gameContractFactory.deploy(
      ["IceDragon", 
      "Boogie", 
      "Trex"],       // Names
      ["https://i.imgur.com/01IH10x.jpeg", // Images
      "https://i.imgur.com/Sp1NHtg.jpeg", 
      "https://i.imgur.com/9gezD6j.jpeg"],
      [100, 200, 300],                    // HP values
      [100, 50, 25],                       // Attack damage values
      "Satoshi", // Boss name
      "https://i.imgur.com/k4iCQVu.png", // Boss image
      10000, // Boss hp
      50 // Boss attack damage
    );

    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);

    console.log("Boooooooom! Done!");
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();