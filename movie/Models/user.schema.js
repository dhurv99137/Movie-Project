const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String
})

const User = mongoose.model("user.schema", UserSchema)

module.exports = User