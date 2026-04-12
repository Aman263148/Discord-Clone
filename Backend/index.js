import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import UserRouter from './router/user.route.js'
import { dbConnection } from './Connection/dataBase.connection.js'
dotenv.config()
const app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
const port = process.env.Port || 5000
const db_url = process.env.db_url
dbConnection(db_url)

app.use('/user/api',UserRouter)
app.listen(port,()=>console.log(`App Running on the Post :${port}`))