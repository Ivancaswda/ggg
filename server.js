import express from 'express'
import dotenv from 'dotenv'
import userRouter from "./routes/userRoute.js";
import cookieParser from 'cookie-parser'
import connectDb from "./lib/mongodb.js";

import cors from 'cors'

const app = express()

const PORT =  2125

dotenv.config()



app.use(express.json({limit: '5mb'})) // limit for the image resolution

app.use("/api/user", userRouter)

    app.use(cors({
        origin: "http://localhost:5175",
        credentials: true
    }))

app.get("/", (req, res) => {
    res.send('api работает')
})

app.use(cookieParser())





app.listen(PORT, async () => {
    console.log(`Сервер запущен на порте ${PORT}`)
    await connectDb()

})