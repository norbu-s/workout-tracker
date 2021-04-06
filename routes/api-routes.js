const express = require('express');
const router = require("express").Router();
const mongoose = require("mongoose");
// mongoose.connect('localhost:27017/test');
const Schema = mongoose.Schema;

const db = require("../models/Workout");



//post exercise
router.post("/api/exercise", ({ body }, res) => {
    db.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

// Request for getting all exercise
router.get("/api/exercises", (req, res) => {
    db.find()
        .then((dbData) => {
            res.json(dbData);
        })
        .catch((err) => {
            res.json(err);
        });
});

// router.get("/exercise/:id", (req, res) => {
//     db.find()
//         .then((dbData) => {
//             res.json(dbData);
//         })
//         .catch((err) => {
//             res.json(err);
//         });
// });


module.exports = router;