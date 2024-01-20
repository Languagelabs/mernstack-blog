import bcryptjs from 'bcryptjs'
import User from '../models/user.model.js';

export const signup = async (req, res) => {
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
        res.status(409).json('Conflicting data already exists')
    }
    
}

 