import User from '../models/userModel.js'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

const createToken = (_id) => {
   return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' })
}

//login user
const loginUser = async (req, res) => {
    res.json({ message: 'login user' })
}

//signUp user
const signupUser = async (req, res) => {
    const { email, password } = req.body
    console.log(req.body)

    try {
        const user = await User.signup(email, password)

        //create a token
        const token = createToken(user._id)

        res.status(201).json({ email, user, token })
    }
    catch (e) {
        console.log(e)
        res.status(403).json({ error: e.message })
    }
}

export { loginUser, signupUser }