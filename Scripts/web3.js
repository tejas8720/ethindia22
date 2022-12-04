import abi from "./abi/abi.json" assert {type: "json"};

// New NFT
const buttonMint = document.getElementById('mint-seed');
buttonMint.addEventListener('click', mintNFT);

function addLiquidity() {
    // If Metamask is not available
    if (typeof window.ethereum == "undefined") {
        rej("You should install Metamask to use it!");
        alert("Login to Metamask");
    }
    // Web3 Instance 
    let web3 = new Web3(window.ethereum);
    let contract = new web3.eth.Contract(abi, "0xD85E0C45f7477c0CFE7385d90748457F40DACA47");

    web3.eth.getAccounts(0).then((accounts) => {
        contract.methods.addLiquidity(0).send({ from: accounts[0] }).then((data) => {
            console.log("Credits included");
        });
    });
}


function buyCarbonCredits() {
    // If Metamask is not available
    if (typeof window.ethereum == "undefined") {
        rej("You should install Metamask to use it!");
        alert("Login to Metamask");
    }
    // Web3 Instance 
    let web3 = new Web3(window.ethereum);
    let contract = new web3.eth.Contract(abi, "0xcDff5C0f38dce9091370ab868fbC15BEb2591Af9");

    web3.eth.getAccounts().then((accounts) => {
        contract.methods.buyCarbonCredits().send({ from: accounts[0] }).then((data) => {
            console.log("Credits included");
        });
    });
}

function getReserves() {
    // If Metamask is not available
    if (typeof window.ethereum == "undefined") {
        rej("You should install Metamask to use it!");
        alert("Login to Metamask");
    }
    // Web3 Instance 
    let web3 = new Web3(window.ethereum);
    let contract = new web3.eth.Contract(abi, "0xcDff5C0f38dce9091370ab868fbC15BEb2591Af9");

    web3.eth.getAccounts().then((accounts) => {
        contract.methods.getReserves().send({ from: accounts[0] }).then((data) => {
            console.log("Credits included");
        });
    });
}


