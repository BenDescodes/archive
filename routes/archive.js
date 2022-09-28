const { createArchive, listArchive, countAr } = require('../controllers/archive');
const router = require('express').Router()


upload = require('../middleware/fileUpload'),
uploadFiles = upload.upload.fields([{ name: 'file', maxCount: 1 }, { name: 'filearchive', maxCount: 20 },{ name: 'doc', maxCount: 1 },{ name: 'video', maxCount: 1 }]);

router.post('/',uploadFiles,createArchive)
router.get('/count',countAr)
router.get('/',listArchive)



module.exports = router