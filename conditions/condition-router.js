const router = require('express').Router()
const restricted = require('../auth/restricted.js')
const Conditions = require('./condition-model.js')

const result = require('../temp/result.js')

router.get('/',restricted, (req,res) => {
    res.status(200).json(result);
});


// router.get('/',restricted, (req,res) => {
//     console.log('----get condition data')
//     Conditions.find()
//     .then(conditions => {
//         res.status(200).json(conditions)
//     })
//     .catch(err => res.send(err))
// })

module.exports = router