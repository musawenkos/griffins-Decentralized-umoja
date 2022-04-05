const express = require("express");
const app = express();
const http = require("http").createServer(app);
const cors = require("cors");
const sql = require('mssql');
const algosdk = require("algosdk");
const baseServer = "https://testnet-algorand.api.purestake.io/idx2";
const port = "";
const PORT = 5000;

const token = {
    'X-API-key': 'UcMg75wrnjavhV6zGanrn1cUUsuN3ZpN8qboO8Nv',
}

let indexerClient = new algosdk.Indexer(token, baseServer, port);

app.use(cors());
app.use(express.json());
const crypto = require('crypto');
var config = {
    user: 'MBC',
    password: '123456',
    server: 'DESKTOP-5DSBE27', 
    database: 'Muni',
    trustServerCertificate: true,
};

app.post("/register",async (req,res)=>{
    const {userType, email, fName,walletAddress, password} = req.body;
    const userTypeArr = ['National Government','Local Municipality','Service Provider']

    // connect to your database
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        var sqlStr = "INSERT INTO Users (user_email,wallet_address,first_name,password,User_typeID) VALUES('"+ email +"','"+ walletAddress +"','"+ fName+"','"+ password+"',"+ (userTypeArr.indexOf(userType) + 1) +")";
        request.query(sqlStr, function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset);
            
        });
    });

    
})

//NOTE:
//accountAddressInfor.transactions[0]["inner-txns"] => RECEIVER INNER TRANSACTION => []
//accountAddressInfor.transactions[0].sender => SENDER ACCOUNT => ''
//accountAddressInfor.transactions[0].id => TRANSACTION ID => ''

app.get("/transactions/:accountAddress",async (req,res)=>{
    let transactionsArrBulk = [];
    const accountAddress = req.params.accountAddress;
    let accountAddressInfor = await indexerClient.lookupAccountTransactions(accountAddress).limit(25).txType("pay").do();
    let transactionsArr = accountAddressInfor.transactions;
    for (let index = 0; index < transactionsArr.length; index++) {
       //console.log(transactionsArr[index]["inner-txns"]) //[]
       if(accountAddressInfor.transactions[index]["inner-txns"] !== undefined){
        let tranxBlock = {
            "txId": accountAddressInfor.transactions[index].id,
            "senderAccount": accountAddressInfor.transactions[index].sender,
            "receiverInnerTrans": accountAddressInfor.transactions[index]["inner-txns"],
        }
        transactionsArrBulk.push(tranxBlock);
       }        
    }
    res.send(transactionsArrBulk); 
})

app.post("/login",async (req,res)=>{
    const {userType, email} = req.body;
    // connect to your database
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        var sqlStr = "SELECT * FROM Users WHERE user_email ='" + email + "'";
        request.query(sqlStr, function (err, recordset) {

            if (err) console.log(err)
            let record = recordset.recordset
            if(record.length != 0){
                // send records as a response
                res.send({"exist":"true"});
            }else{
                res.send({"exist":"false"});
            }
            
        });
    });

});



app.listen(PORT, () => {
    console.log(`listening on *:${PORT}`);
});