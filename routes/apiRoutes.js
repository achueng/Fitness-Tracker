const router = require("express").Router();
const Workout = require("../models/workout.js");

// API Routes
router.get("/api/workouts", (req,res) => {
    Workout.find({})
    .sort({ day: 1 })
    .then(lastWorkout => {
      res.json(lastWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
})

module.exports = router;
