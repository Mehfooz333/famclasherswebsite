const req = require('express/lib/request');
const res = require('express/lib/response');
const ourWork = require('../model/ourWork');
const db = require('../database/connectdb');

exports.find = (req, res, next) => {
    if (req.query.id) {
        db.query('SELECT * FROM about where Id=?', [req.query.id], function (error, results, fields) {  if (error) throw error;  
        res.send(results) });
    } else {
        let sql = "SELECT * FROM about";
        db.query(sql, (err, rows) => {
            if (err) throw err;
            res.send(rows)
        });
    }
}

//updating the data
exports.update = (req, res, next) => {
    const userId = req.params.id;
    let sql = "update about SET heading='" + req.body.heading + "',  description='" + req.body.description + "', image='" + req.file.filename + "' where id =" + userId;
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.redirect('/admin/pages/about');
    });
}