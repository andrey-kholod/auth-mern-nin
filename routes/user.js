import { Router } from "express";
import { loginUser, signupUser } from "../controllers/userController.js";

const router = new Router()

//login route
router.post('/login', loginUser)

//sign up route
router.post('/signup', signupUser)

export default router