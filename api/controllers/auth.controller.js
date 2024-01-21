import bcryptjs from 'bcryptjs'
import { errorHandler } from '../utils/error.js';
import User from '../models/user.model.js';
import jwt from 'jsonwebtoken'

export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;
    if( !username || !email || !password || username === '' || email === '' || password === ''){
        return res.json('Enter all fields')
    }

    const hashedPassword = bcryptjs.hashSync(password, 10)

    const newUser = new User({
        username,
        email,
        password: hashedPassword
    })

    try{
        await newUser.save()
        res.status(200).json('registration successful')
    }catch(error){
        next(errorHandler(409, 'Data exists, if you are a user sign in'))
    }    
}

export const signin = async (req, res, next) => {
    const {email, password} = req.body
    if( !email || !password || email === '' || password === ''){
        return next(errorHandler(400, 'All fields are required'))
    }

    try {
        const validUser = await User.findOne({email})
        if(!validUser){
            return next(errorHandler(400, 'Invalid username'))
        }
        const validPassword = bcryptjs.compareSync(password, validUser.password)
        if (!validPassword) {
            return next(errorHandler(400, 'Invalid Password'))
        }
        const token = jwt.sign({Id: validUser._id}, process.env.JWT_SECRET);
        const {password: pass, ...rest} = validUser._doc

        res.status(200).cookie('access_token', token, {httpOnly: true}).json(rest)

    } catch (error) {
        next(error)
    }

}

 