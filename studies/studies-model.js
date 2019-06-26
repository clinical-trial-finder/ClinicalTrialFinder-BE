const db = require('../database/dbConfig.js')

module.exports = {
    getStudies,
    getStudyById,
    addStudy,
    update,
    remove
};

function getStudies() {
    // console.log(db('studies'))
    return db('studies');
}

function getStudyById(id) {
    const study= db('studies')
        .where({ id })
        .first()

    console.log('get by id model ', study)    
    return study  
}

function addStudy(study) {
    return db('studies')
        .insert(study, 'id')
}

function update(id, changes) {
    return db('studies')
        .where({ id })
        .update(changes)
}

function remove(id) {
    return db('studies')
        .where({ id })
        .del()
}