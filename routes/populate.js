const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");
const con = require("../connection");


router.get("/", (req, res) => {
    let sql = "CREATE TABLE users (id INT PRIMARY KEY, name VARCHAR(255), username VARCHAR(255), email VARCHAR(255))";  
    con.query(sql, function (err, result) {  
        if (err) throw err;  
        console.log("Table created"); 
        res.send("Table created") 
    })
    .then((data) => {
        fetch('http://jsonplaceholder.typicode.com/users')
    })
});

router.get("/delete", () => {
    let sql = "DROP TABLE users";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table deleted");
    });
});





/*router.get("/", () => {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(function(response){
        return response.json();
    })
    .then(function(response){
        console.log(response);
    })
});*/


module.exports = router;