const req = require('express/lib/request');
const res = require('express/lib/response');
const db = require('../database/connectdb');
const Validator = require('fastest-validator');
const { schema } = require('../model/influencer');


//create and save new user
exports.create = (req, res, next) => {
    if (!req.body) {
        res.status(400).send({ message: "content cannot be empty !!" })
        return
    }
    let data ={id: Math.random()*900, name: req.body.name, description: req.body.description, brand_url: req.body.brand_url, image_file: req.file.filename, status: req.body.status};

    let sql = "INSERT INTO influencer SET ?";

    db.query(sql, data, (err, results) => {
        if (err) throw err;
        console.log('data inserted succesfully')
        res.redirect('/admin/influencer/index');
    });
    
}

//retrive and show all creator data
exports.find = (req, res, next) => {
    if (req.query.id) {
        db.query('SELECT * FROM influencer where Id=?', [req.query.id], function (error, results, fields) {  if (error) throw error;  
        res.send(results) });
    } else {
        let sql = "SELECT * FROM influencer";
        db.query(sql, (err, rows) => {
            if (err) throw err;
            res.send(rows)
        });
    }
}

exports.featured= (req,res,next)=>{
    const active = 'Active';
    db.query('SELECT * FROM influencer where status=?',active, function (error, results, fields) {  if (error) throw error;  
    res.send(results) });
}

//updating the data
exports.update = (req, res, next) => {
    const userId = req.params.id;
    let sql = "update influencer SET id='" + Math.random()*900 + "', name='" + req.body.name + "',  description='" + req.body.description + "',  brand_url='" + req.body.brand_url + "', image_file='" + req.file.filename + "', status='" + req.body.status + "' where id =" + userId;
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.redirect('/admin/influencer/index');
    });
}

//deleting data from the database
exports.delete = (req, res, next) => {
    const userId = req.params.id;
    var sql = `DELETE from influencer where id = ${userId}`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.redirect('/admin/influencer/index')
    });
}
