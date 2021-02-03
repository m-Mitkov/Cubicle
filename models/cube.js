const fs = require('fs/promises');
const path = require('path');

const db = require('../config/productsDb.json');


class Cube {

    constructor(id, name, desription, imageURL, difficulty){
        this.id = id;
        this.name = name;
        this.desription = desription;
        this.imageURL = imageURL;
        this.difficulty = difficulty;
    }

    getByID(id){
        return db.find(x => this.id === id);
    }
    
    getAll(){
        return db;
    }

    create(cube){
        db.push(cube);
        
        return fs.writeFile(
            path.join(__dirname, '../config/productsDb.json'), //  ABSOLUTE PATH
            JSON.stringify(db), // DATA
        )
    }
}

module.exports = Cube;