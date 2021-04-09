const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({

    day: {
        type: Date,
        default: Date.now()
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: "Enter your completed exercise"
        },
        name: {
            type: String,
            trim: true,
            required: "Enter an Exercise:"
        },
        type: {
            type: String,
            trim: true,
            required: "Enter a type of Exercise: "
        },
        weight: {
            type: Number,
            required: "Enter weight: "
        },
        sets: {
            type: Number,
            required: "Enter sets: "
        },
        reps: {
            type: Number,
            required: "Enter repetition: "
        },
        duration: {
            type: Number,
            required: "Enter Duration: "
        },
    }],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout