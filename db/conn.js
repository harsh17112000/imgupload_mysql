const mysql = require("mysql2");


const conn = mysql.createConnection({
    user:process.env.USER,
    host:process.env.HOST,
    password:process.env.PASSWORD,
    database:process.env.DATABASE
});

conn.connect((error)=>{
    if(error) throw error;
    console.log("connected !")
});

module.exports = conn