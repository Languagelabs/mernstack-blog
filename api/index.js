import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();

const app = express();

mongoose.connect(process.env.MONGO)
.then(() => {
    console.log('Mongodb connected Successfully')
})
.catch(err => {
    console.log('Failed to connect to Mongodb' + err)
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})

