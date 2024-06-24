const { Router } = require("express")
const { get, createUser, singupPage, deleteUser, userLogin, getUsers, loginpage } = require("../controllers/user.controller")
const isValid = require("../middlewares/user_middlewares")


let userRoute = Router()

userRoute.get("/",get)
userRoute.post("/user/signup",isValid,createUser)
userRoute.delete("/user/delete/:id",deleteUser)

userRoute.post("/user/login",userLogin)

userRoute.get("/user/",getUsers)

userRoute.get("/signuppage", singupPage)
userRoute.get("/loginpage",loginpage)
    


module.exports = userRoute