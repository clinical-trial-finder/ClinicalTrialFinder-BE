const router = require('express').Router();
const restricted = require('../auth/restricted.js')

const Studies = require('./studies-model.js')

router.get('/', (req, res) => {
    // console.log(req.body)
    Studies.getStudies()
        .then(study => {
            // console.log(study)
            res.status(200).json(study);
        })
        .catch(error => {
            res.status(500).json(error);
        }

        )
})

router.get('/:id', restricted, (req, res) => {
    Studies
        .getStudyById(req.params.id)
        .then(study => {
            if (study) {
                res.status(200).json(study);
            }
            else {
                res.status(404).json({ message: 'study id not found' });
            }
        })
        .catch(error => {
            res.status(500).json(error);
        }

        )
})

router.get('/search/:filter', (req, res) => {
    // console.log('filter by ', req.params.filter)
    Studies
        .findBy(req.params.filter)
        .then(filter => {

            if (filter) {
                res.status(201).json(filter);
            }
            else {
                res.status(404).json({ message: 'no search results found' });
            }
        })
        .catch(error => {
            res.status(500).json(error)
        })
})

router.post('/', restricted, (req, res) => {
    Studies
        .addStudy(req.body)
        .then(ids => {
            res.status(201).json(ids);
        })
        .catch(error => {
            res.status(500).json(error);
        }

        )
})

router.put('/:id', restricted, (req, res) => {
    Studies
        .update(req.params.id, req.body)
        .then(count => {
            // console.log('count ',count)
            if (count > 0) {
                res.status(201).json(count);
            }
            else {
                res.status(404).json({ message: 'study id not found' });
            }
        })
        .catch(error => {
            // console.log('update error ',error)
            res.status(500).json(error);
        }

        )
});

router.delete('/:id', restricted, (req, res) => {

    Studies
        .remove(req.params.id)
        .then(count => {
            // console.log('count ',count)
            if (count > 0) {
                res.status(201).json(count);
            }
            else {
                res.status(404).json({ message: 'study id not found' });
            }
        })
        .catch(error => {
            // console.log('delete error ',error)
            res.status(500).json(error);
        }

        )
})


module.exports = router