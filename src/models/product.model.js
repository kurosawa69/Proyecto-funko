const {conn} = require('../config/conn');

const getAll = async () => {
    
        const data = await conn.query('SELECT * FROM product;');
        return data;
    }
    
    module.exports = {
        getAll
    }
