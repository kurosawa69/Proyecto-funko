const mysql = require('mysql2');
require('dotenv').config();

const pool = mysql.createPool({
    user: process.env.DBUSER,
    password: process.env.DBPASS,
    host: process.env.DBHOST,
    port: process.env.DBPORT,
    database: 'funko_db',
    connectionLimit: 10,
    waitForConnections: true,
    queueLimit: 0
});

pool.getConnection((err, conn) => {
    if (err){
        console.log('Error al conectarse a la BD: ' + err);
    } else{
        console.log('Conexion a la base de datos exitosa');
        conn.release();
    }
});

module.exports = {
    conn: pool.promise()
}