const mysql = require('mysql2');

const pool = mysql.createPool({
    user: 'root',
    password: '',
    host: 'localhost',
    port: '3306',
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