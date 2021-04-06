const { Workout } = require("../models");

const db = require("../models/workout");

module.exports = function(app) {
    app.get("/api/workouts", (req, res) => {
        db.Workout.aggregate(
            [{
                $addFields: {
                    totalDuration: { $sum: "$exercises.duration" },
                },
            }, ],
            (err, workout) => {
                if (err) {
                    console.log(err);
                } else {
                    res.json(workout);
                }
            }
        );
    });

    app.get(`/api/workouts/range`, (req, res) => {
        db.Workout.aggregate([{
                $addFields: {
                    totalDuration: { $sum: "$exercises.duration" },
                },
            }, ])
            .limit(7)
            .then((dbWorkout) => {
                res.json(dbWorkout);
                console.log(dbWorkout);
            })
            .catch((err) => {
                res.json(err);
            });
    });

    app.post("/api/workouts", (req, res) => {
        db.Workout.create(req.body)
            .then((dbWorkout) => {
                res.json(dbWorkout);
            })
            .catch((err) => {
                res.json(err);
            });
    });

    app.put("/api/workouts/:id", (req, res) => {
        db.Workout.create(req.body)
            .then((dbWorkout) => {
                res.json(dbWorkout);
            })
            .catch((err) => {
                res.json(err);
            });
    });
};