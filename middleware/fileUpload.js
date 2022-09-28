let baseLocal = "files/";
let multer = require('multer')
let sharp = require('sharp');
const path = require('path')
/* const FileUpCompresse = async (extension, file) => {
    if (extension == '.png') {
        await sharp(file.path)
            .png({ quality: 30, adaptiveFiltering: true, force: true }).withMetadata()
            .toFile(baseLocal + file.filename + extension)
    }
    else {
        await sharp(file.path)
            .toFormat("jpeg")
            .jpeg({ quality: 30 })
            .toFile(baseLocal + file.filename + extension)
    }
} */
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'files');
    },
    filename: function (req, files, cb) {
        let ext = path.extname(files.originalname)
        cb(null, files.originalname.slice(0, -4).split(' ').join('_').substring(0, 20) + Date.now() + ext);
        /* if(files.mimetype.startsWith('image')){
            cb(null, files.originalname.slice(0,-4).split(' ').join('_').substring(0,20) + Date.now());
        }else{
            cb("Upload juste pour les images",false)
        } */
    }
});
var upload = multer({ storage: storage })
/* let uploadfield = upload.fields([{ name:'fileup'},{name : 'fileportrait'}]) */
module.exports = { upload }