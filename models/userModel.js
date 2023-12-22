import { Schema, model } from 'mongoose'
import bcrypt from 'bcrypt'
import validator from 'validator'

const userSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
})

//static signup method
userSchema.statics.signup = async function(email, password) {

    //validator

    if (!email || !password) {
        throw Error('Must be fielded')
    }

    if (!validator.isEmail(email)) {
        throw Error('Email is not valid')
    }

    if (!validator.isStrongPassword(password)) {
        throw Error('Password nit strong enough')
    }

    const exists = await this.findOne({email})

    if (exists) {
        throw new Error('email already used')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({ email, password: hash })

    return user

}

export default model('User', userSchema)