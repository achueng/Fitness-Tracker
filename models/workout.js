var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: {
        type: Array
    },
    type: {
        type: String,
        required: true,
        default: "resistance"
    },
    name: {
        type: String,
        trim: true,
        required: "String is Required",
        default: "Bench Press"
    },
    duration: {
        type: Number,
        required: true,
        default: 20
    },
    weight: {
        type: Number,
        required: true,
        default: 250
    },
    reps: {
        type: Number,
        required: true,
        default: 20
    },
    sets: {
        type: Number,
        required: true,
        default: 4
    }
});

var Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;