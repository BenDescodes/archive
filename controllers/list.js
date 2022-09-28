const con = require('../models/connect')
const sha1 = require('js-sha1')
const Joi = require('joi')
const axios = require('axios').default
const url = 'http://localhost:3001/'

exports.listGrade = (req,res)=>{
    const query = "SELECT * FROM grade";
    con.query(query, (err, resultat) => {
        if (err) res.json(err.message)
        else {
            res.json(resultat)
        }
    })
}
exports.listRole = (req,res)=>{
    const query = "SELECT * FROM da";
    con.query(query, (err, resultat) => {
        if (err) res.json(err.message)
        else {
            res.json(resultat)
        }
    })
}
exports.listEmpl = (req,res)=>{
    const query = "SELECT * FROM emplacement";
    con.query(query, (err, resultat) => {
        if (err) res.json(err.message)
        else {
            res.json(resultat)
        }
    })
}
exports.listObs = (req,res)=>{
    const query = "SELECT * FROM observation";
    con.query(query, (err, resultat) => {
        if (err) res.json(err.message)
        else {
            res.json(resultat)
        }
    })
}
exports.listCat = (req,res)=>{
    const query = "SELECT * FROM categorie";
    con.query(query, (err, resultat) => {
        if (err) res.json(err.message)
        else {
            res.json(resultat)
        }
    })
}
