const uniqid = require('uniqid');

const Cube = require('../models/cube');
const productData = require('../data/productData');

function getAll(query){
    let cubes = productData.getAll();
    
    if (query.search) {
        cubes = cubes.filter(x => x.name.toLowerCase().includes(query.search.toLowerCase()));
    }
    if (query.from) {
        cubes = cubes.filter(x => x.difficulty >= query.from);
    }
    if (query.to) {     
        cubes = cubes.filter(x => x.difficulty <= query.to);
    }

    return cubes;
}

function getByID(id){
    return productData.getByID(id);
}

function create(data) {
    let cube = new Cube(
        uniqid(),
        data.name,
        data.description,
        data.imageUrl,
        data.difficultyLevel
    );

    return productData.create(cube);
}

module.exports = {
    create,
    getAll,
    getByID
}
