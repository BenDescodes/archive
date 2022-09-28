const { login,createUsers, listUsers, listOneUsers, deleteUsers, updateUsers, updatePassword, countAll } = require('../controllers/users')
const router = require('express').Router()

router.post('/login', login)
router.get('/count', countAll)
router.post('/',createUsers)
router.get('/',listUsers)
router.get('/:id',listOneUsers)
router.delete('/:id',deleteUsers)
router.put('/:id',updateUsers)
router.put('/password/:id',updatePassword)

module.exports = router