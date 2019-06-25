const db = require('../database/dbConfig.js')

module.exports = {
    find,
    findById
}

function find(){
    console.log('----calling find------'+db('conditions'))
    return db('conditions')
}


function findById(id){
    return db('conditions')
    .where({id})
    .first()
}