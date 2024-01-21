import bcryptjs from 'bcryptjs'
import { errorHandler } from '../utils/error.js';
import User from '../models/user.model.js';

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

 