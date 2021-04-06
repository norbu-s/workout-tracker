const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: "Enter an Excercise:",
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
    date: {
        type: Date,
        default: Date.now
    }
});

const Workout = mongoose.model("workout", WorkoutSchema);

module.exports = Workout;