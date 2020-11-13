const router = require("express").Router();
const mongojs = require("mongojs");
const Workout = require("../models/workout.js");

// API Routes
// Data to main page
router.get("/api/workouts", (req,res) => {
    Workout.find({})
    .then(lastWorkout => {
        res.json(lastWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
})

// Data to exercise page (updating/completing a workout)
router.put("/api/workouts/:id", (req, res) => {
    Workout.update({_id:mongojs.ObjectId(req.params.id)}, {$set: req.body})
    .then(updateWorkout => {
        res.json(updateWorkout)
    })
    .catch(err => {
        res.status(400).json(err);
    });
})

// Data to exercise page (creating new workout)
router.post("/api/workouts", (req,res) => {
    console.log("We hit the POST route!");
    // Workout.insert(req.body)
    // .then(newWorkout => {
    //     res.json(newWorkout);
    // })
    // .catch(err => {
    //     res.status(400).json(err);
    // });
})

// Data to stats page
router.get("/api/workouts/range", (req,res) => {
    Workout.find({})
    .sort({ day: 1 })
    .then(allWorkouts => {
        res.json(allWorkouts);
    })
    .catch(err => {
        res.status(400).json(err);
    });
})

module.exports = router;
