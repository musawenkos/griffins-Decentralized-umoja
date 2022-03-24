const express = require("express");
const app = express();
const http = require("http").createServer(app);
const cors = require("cors");
const sql = require('mssql');
const PORT = 5000;

app.use(cors());
app.use(express.json());
const crypto = require('crypto');
var config = {
    user: '',
    password: '',
    server: '', 
    database: '',
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


app.listen(PORT, () => {
    console.log(`listening on *:${PORT}`);
});