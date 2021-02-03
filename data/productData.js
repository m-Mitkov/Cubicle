// handle db GET/ CREATE/ GET BY ID
const fs = require('fs/promises');
const path = require('path');

const db = require('../config/productsDb.json');

module.exports = {
  
    getByID(id){
        return db.find(x => x.id === id);
    },
    
    getAll(){
        return db;
    },

    create(cube){
        db.push(cube);
        
        return fs.writeFile(
            path.join(__dirname, '../config/productsDb.json'), //  ABSOLUTE PATH
            JSON.stringify(db), // DATA
        )

    }
};