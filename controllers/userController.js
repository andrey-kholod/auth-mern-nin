import User from '../models/userModel.js'

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
        console.log(user)

        res.status(201).json({email, user})
    }
    catch(e) {
        console.log(e)
        res.status(403).json({error: e})
    }
}

export { loginUser, signupUser }