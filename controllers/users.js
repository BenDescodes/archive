const con = require('../models/connect')
const sha1 = require('js-sha1')
const Joi = require('joi')
const axios = require('axios').default
const url = 'http://localhost:3001/'

exports.login = (req, res, next) => {
    const login = req.body.username;
    const password = sha1(req.body.password);

    const query = 'SELECT * FROM v_user WHERE login = ? AND password= ?';
    con.query(query, [login, password], function (err, resultat) {
        if (err) res.json({ 'erreur': err.message })
        if (resultat[0]) {
            res.json(resultat[0])
        } else {
            res.json({ 'erreur': "pas d'utilisateur trouver" })
        }
    })

}
exports.createUsers = (req, res, next) => {
    const { nom, login, da, grade } = req.body,
        schema = Joi.object({
            nom: Joi.string().trim().required(),
            login: Joi.required(),
            password: Joi.required(),
            confpassword : Joi.ref('password'),
            da: Joi.required(),
            grade: Joi.required()
        }),
        password = sha1(req.body.password)
    result = schema.validate(req.body)

    if (result.error) { res.json({ "erreur": result.error.details[0].message }) }
    else {

        con.query("SELECT *  FROM users WHERE login=? AND password=?", [login, password], (errt, restel) => {
            if (errt) res.json({ "erreur ": errt.message })
            if (restel[0]) { res.json({ "erreur": "ce login existe déjà" }) }
            else {
                con.query("INSERT INTO users (nom_complet,login,password,da_id,grade_id) VALUES(?,?,?,?,?)", [nom, login, password, da, grade], (err) => {
                    if (err) res.json({ 'erreur': err.message })
                    else {
                        res.json({ "reussie": "Enregitrement effectuer" })
                    }
                })
            }
        })

    }
}
exports.listUsers = (req, res, next) => {
    const query = "SELECT * FROM v_user ORDER BY id_users DESC";
    con.query(query, (err, resultat) => {
        if (err) res.json(err.message)
        else {
            res.json(resultat)
        }
        //if (resultat[0]) { res.json(resultat[0]) } else { res.send({ 'erreur': "pas d'utilisateur trouver" }) }
    })
    
}
exports.listOneUsers = (req, res, next) => {
    const { id } = req.params
    if (id) {
        con.query('SELECT * FROM users WHERE id_users = ?', [id], (err, resultat) => {
            if (err) res.json(err.message)
            else {
                if (resultat[0]) res.json(resultat[0])
                else res.json({ "erreur": "pas d'utilisateur trouver" })
            }
        })
    }
}
exports.deleteUsers = async (req, res, next) => {
    const { id } = req.params
    if (id) {
        //await axios.get(url + 'users/' + id).then(function(response){console.log(response.data)})
        con.query('SELECT * FROM users WHERE id_users = ?', [id], (err, resultat) => {
            if (err) res.json({"erreur" : err.message})
            else {
                if (resultat[0]) {
                    con.query('DELETE FROM users WHERE id_users = ?', [id], (err, resultat) => {
                        if (err) res.json({"erreur" : err.message})
                        else {
                            res.json({ "reussie": "suppression effectuer" })
                        }
                    })
                }
            }
        })
    }
}
exports.updateUsers = (req, res, next) => {
    const { id } = req.params
    const { nom, login, da, grade } = req.body,
        schema = Joi.object({
            nom: Joi.string().trim().required(),
            login: Joi.required(),
            da: Joi.required(),
            grade: Joi.required()
        }),
        result = schema.validate(req.body)

    if (result.error) { res.json({ "erreur": result.error.details[0].message }) }
    else {
        if (id) {
            con.query('SELECT * FROM users WHERE id_users = ?', [id], (err, resultat) => {
                if (err) res.json(err.message)
                else {
                    let sql = "UPDATE users SET nom_complet =?,login=?,da_id=?,grade_id=? WHERE id_users = ?";
                    con.query(sql, [nom, login, da, grade, id], (err, result) => {
                        if (err) res.json(err.message)
                        else res.json({ "reussie": "Modification effectuer" });
                    })
                }
            })
        }
    }
}
exports.updatePassword = (req, res, next) => {
    const { id } = req.params
    let { password, confpassword } = req.body,
        schema = Joi.object({
            password: Joi.string().trim().required(),
            confpassword: Joi.ref('password')
        }),
        result = schema.validate(req.body)

    if (result.error) { res.json({ "erreur": result.error.details[0].message }) }
    else {
        if (id) {
            con.query('SELECT * FROM users WHERE id_users = ?', [id], (err, resultat) => {
                if (err) res.json(err.message)
                else {
                    let sql = "UPDATE users SET password =? WHERE id_users = ?";
                    password = sha1(password)
                    con.query(sql, [password, id], (err, result) => {
                        if (err) res.json(err.message)
                        else res.json({ "reussie": "Modification effectuer" });
                    })
                }
            })
        }
    }
}
exports.countAll = (req,res,next)=>{
    let sql = 'SELECT COUNT(*) users FROM users'
    con.query(sql,(err,result)=>{
        if(err) res.json(err.message)
        else res.json(result[0])
    })
}