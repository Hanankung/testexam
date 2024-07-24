'use strict';
 const express = require(express);
 const crypto = require('crypto');
 const wrRoute = express.Route();
 const connection =require('../db');

 wrRoute.port('/books',function(req, res,next){
    connection.execute(`INSERT INTO books(id,title,author,published_year,genre,available) VALUES (?,?,?,?,?,?);`,
    [req.body.title, req.body.author, req.body.published_year,Date.now(),Date.now()]).then(() => {
        console.loh('ok');
        res.status(201).send("success");
    }).catch((err) => {
        console.log(err);
        res.end();
    });
 });
 wrRoute.get('/books',function(req,res,next){
    connection.execute('SELECT *FROM books;').then((result) => {
        var rawData = result[0];
        res.send(rawData );
    }).catch((err) => {
        console.log(err);
        res.end();
    });
 })