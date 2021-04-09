const Workout = require("../models/workout");

module.exports = function(app) {
    app.get("/api/workouts", (req, res) => {
        Workout.aggregate(
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

    app.get("/api/workouts/range", (req, res) => {
        Workout.aggregate([{
            $addFields: {
                totalDuration: { $sum: "$exercises.duration" }
            }
        }]).then(result => {
            const resultInRange = result.slice(-7);
            res.json(resultInRange);
        }).catch(err => {
            res.json(err);
        });
    });

    app.post("/api/workout", (req, res) => {
        Workout.create(req.body)
            .then((dbWorkout) => {
                res.json(dbWorkout);
            })
            .catch((err) => {
                res.json(err);
            });
    });

    app.put("/api/workouts/:id", (req, res) => {
        Workout.findOneAndUpdate({ _id: req.params.id }, { $push: { exercises: req.body } }, { new: true })
            .then(updatedWorkout => {
                res.json(updatedWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });
};