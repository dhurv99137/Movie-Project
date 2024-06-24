const express = require("express")
const userRoute = require("./Routes/user.route")
const dbConnect = require("./config/db")


const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
require("dotenv").config()

let port = process.env.PORT || 8090
const path = require("path");
const movieRoute=require("./Routes/movie.route")


// ejs setup

app.set("view engine", "ejs")
app.set("views", __dirname + "/view")


app.use("/user", userRoute)
app.use("/movie", movieRoute)

app.listen(port, () => {
    console.log("server in runing up to 8090");
    dbConnect()
})
