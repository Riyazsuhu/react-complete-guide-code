import express from 'express'
const app = express()
import bodyParser from 'body-parser'
import router from './router.js'
import cors from 'cors'
import mongoose from 'mongoose'

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors({credentials: true, origin: 'http://localhost:3000'}))

mongoose.connect('mongodb://127.0.0.1:27017/redux-cart',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }, err => err ? console.log(err) : console.log('DB connnected successfully..'))

app.use(router)

app.listen( 3001 , () => {
    console.log('redux-cart running on port 3001')
})