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
        required: true
    },
    name: {
        type: String,
        trim: true,
        required: "String is Required"
    },
    duration: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    sets: {
        type: Number,
        required: true
    }
});

var Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;