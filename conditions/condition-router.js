const router = require('express').Router()
const restricted = require('../auth/restricted.js')
const Conditions = require('./condition-model.js')

router.get('/',restricted, (req,res) => {
    console.log('----get condition data')
    Conditions.find()
    .then(conditions => {
        res.status(200).json(conditions)
    })
    .catch(err => res.send(err))
})

module.exports = router