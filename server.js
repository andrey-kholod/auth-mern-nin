import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import workoutsRoutes from './routes/workouts.js'
import userRoutes from './routes/user.js'
import cors from 'cors'
dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/workouts', workoutsRoutes)
app.use('/api/user', userRoutes)

console.log(process.env.MONGO_URL)

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Connect at ${process.env.PORT} port!`)
        })
    })
    .catch((er) => {
        console.log(er)
    })