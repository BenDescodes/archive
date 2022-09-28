const con = require('../models/connect')
const Joi = require('joi'), path = require('path');
/* const { FileUpCompresse } = require('../middleware/fileUpload'); */
const axios = require('axios').default
let url = 'http://localhost:3001/';
let baseLocal = "files/";
const { promisify } = require('util'),
    otherQuery = async (sql, id = null) => {
        let myEvent = promisify(con.query).bind(con)
        if (id == null) return await myEvent(sql)
        else return await myEvent(sql, [id])
    }
exports.createArchive = (req, res, next) => {
    const AllFile = req.files
    const { intitule, description, cat, empl, obs } = req.body
    console.log(AllFile)
    console.log(req.body)

    let file = AllFile.file[0], img = file.filename
    let fileArchive = AllFile.filearchive
    let filedoc = AllFile.doc[0], doc = filedoc.filename
    /*  let fileVid = AllFile.video[0], extV = path.extname(AllFile.video[0].originalname), video = fileVid.filename + extV */
    const schema = Joi.object({
        intitule: Joi.string().required(),
        description: Joi.string().required(),
        cat: Joi.number().required(),
        empl: Joi.number().required(),
        obs: Joi.number().required()
    })
    result = schema.validate(req.body);

    if (result.error) res.send({
        'erreur': result.error.details[0].message
    });
    else {
        con.query('SELECT * FROM archive WHERE intitule=? AND description=?', [intitule, description], (err, result) => {
            if (err) return res.json({ 'erreur': err.message })
            else if (result[0]) return res.json({ 'erreur': 'archive déjà enregistrer' })
            else {
                const query = 'INSERT INTO archive(intitule,description,img,doc,users_id,emp_id,cat_id,obs_id) VALUES(?,?,?,?,?,?,?,?)'
                con.query(query, [intitule, description, img, doc, 1, empl, cat, obs], (errg, resultg) => {
                    if (errg) res.json({ "erreur": err.message })
                    else {
                        let boucle = AllFile.filearchive.length - 1;

                        for (let i = 0; i <= boucle; i++) {
                            let imageArchive = fileArchive[i].filename
                            const query = "INSERT INTO image (img,archive_id) SELECT ?,id_archive FROM archive WHERE intitule = ? and description = ? "
                            con.query(query, [imageArchive, intitule, description], (erri, resulti) => {
                                if (erri) return res.json({ 'erreur': erri.message })
                                else console.log('ok')
                            })

                            if (i === boucle) {
                                res.json({ "reussie": 'Enregistrement effectuer' })
                                break
                            }
                        }
                    }
                })
            }
        })
    }
}

exports.listArchive = async (req, res, next) => {
    const query = 'SELECT * FROM v_archive ORDER BY id_archive DESC';
    const allArchive = await otherQuery(query)
    if (allArchive[0]) {
        const fullData = await Promise.all(allArchive.map(async (items) => {
            var allData ={}
            const data = {
                id_archive : items.id_archive,
                intitule : items.intitule,
                description : items.description,
                date_creation : items.date_creation,
                img_cover :`${req.protocol}://${req.get('host')}/files/${items.img_cover}`,
                doc : `${req.protocol}://${req.get('host')}/files/${items.doc}`,
                categorie : items.cat,
                emplacement : items.emp,
                observation : items.obs,
                duree : items.duree + ' ans',
            }

            let sqll = 'SELECT img FROM image WHERE archive_id = ?'

            let image_archive = await otherQuery(sqll, items.id_archive)

            data.img_archive = await Promise.all(image_archive.map(async (key) => {
                const dt = {
                    image_archive : `${req.protocol}://${req.get('host')}/files/${key.img}`,
                }
                return dt
            }))
            
            allData = data

            return data
            /* 
            var sql = 'SELECT img FROM image WHERE archive_id = ?'
            const image_archive = await otherQuery(sqll, items.id_archive)

            const img_archive = await Promise.all(image_archive.map(async (key) => {
                const dt = {
                    image_archive : `${req.protocol}://${req.get('host')}/files/${key.img}`,
                }
                return dt
            }))
           
            data.img_archive

            console.log(data)
            
            allData.data
            
            return data */

        }))
        return res.json(fullData)
    }
}
exports.countAr = (req,res,next)=>{
    let sql = 'SELECT COUNT(*) archive FROM archive'
    con.query(sql,(err,result)=>{
        if(err) res.json(err.message)
        else res.json(result[0])
    })
}