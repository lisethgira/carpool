import mysql from 'mysql';
import {promisify} from 'util';

import config from './config';

//WITH POOL
const pool = mysql.createPool(config.db);
pool.getConnection((err, conn)=>{
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Database connection was closed.')
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('Database has too many connections.')
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('Database connection was refused.')
        }
    } else{
        if (conn) conn.release();
        console.log("Se establecio conecion");
    }
    return
})

pool.query = promisify(pool.query);
export default pool;
/*
let conexion = await mysql.createConnection({
    host: 'bawdkc5uydt2x70ujxbp-mysql.services.clever-cloud.com',
    user: 'uhyznnycbl5pbww7',
    password: 'LR4qc07c6LtKiHgjrnE0',
    database: 'bawdkc5uydt2x70ujxbp',
});

conexion.e
conexion.connect(function (error) {
    if (error) {
        nbv
        throw error;
    } else {
        console.log('conectado a base de datos en la nube')
    }
});

export default conexion;

*/