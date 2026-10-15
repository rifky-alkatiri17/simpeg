import mysql from "mysql2/promise";

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "db_pemkotkupang2"
});

//console.log(db);

export default db;