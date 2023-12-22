import { Router } from "express";
import { createWorkout, deleteWorkout, getWorkout, getWorkouts, updateWorkout } from "../controllers/workoutController.js";

const router = new Router()

//All wc
router.get('/', getWorkouts)

//Single wc
router.get('/:id', getWorkout)

//Post a new wc
router.post('/', createWorkout)

//Delete a wc
router.delete('/:id', deleteWorkout)

//Update a wc
router.patch('/:id', updateWorkout)

export default router;