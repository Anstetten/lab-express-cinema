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


//Get an individiam movie

router.get ('/movies/:id', (req,res)=>{
    movieModel.findById(req.params.id)
        .then((movieFound)=>{
            console.log(movieFound);
            res.render("oneMovie.hbs",{
                css: ["oneMovie.css"],
                movie: movieFound,
            })
        })
        .catch((error)=>{console.log(error);});
});

module.exports =router;
