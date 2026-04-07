import express from 'express'
import dotenv from 'dotenv'

dotenv.config()


const app = express()
const port = process.env.Port || 5000
app.get('/',(req,res)=>{
    res.send("Jai Mata Di")
})
app.listen(port,()=>console.log(`App Running on the Post :${port}`))