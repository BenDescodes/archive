const { listGrade, listRole, listEmpl, listCat, listObs } = require('../controllers/list')

const router = require('express').Router()

router.get('/grade', listGrade)
router.get('/role', listRole)
router.get('/emp', listEmpl)
router.get('/cat', listCat)
router.get('/obs', listObs)



module.exports = router