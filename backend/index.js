const express = require("express")
const cors = require("cors")
const {connection} = require("./config/db")
const {userRoute} = require("./router/user-router")
const {movieRouter} = require("./router/movie-router")
const {authentication} = require("./middleware/authentication")
require('dotenv').config()

const app = express()
app.use(cors())
app.use(express.json())

app.get("/",(req, res)=>{
    res.send("WELCOME")
})

app.use("/proMovie", userRoute)
app.use(authentication)
app.use("/proMovie", movieRouter)


app.listen(process.env.port,async ()=>{
    try {
        await connection;
        console.log("DB CONNECTED");
    } catch (error) {
        console.log("DB NOT CONNECTED", error);
    }
    console.log(`port running at ${process.env.port}`);
})