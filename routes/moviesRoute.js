const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const movieModel= require('../models/Movie.model');

router.get ('/movies',(req,res)=>{
    movieModel.find(req.query)
        .then((movieDocuments)=>{
            res.render("movies.hbs",{
                css: ["movies.css"],
                movie: movieDocuments,
            });
            console.log(movieDocuments);
        })
        .catch((error)=>{console.log(error);});
});

module.exports =router;
