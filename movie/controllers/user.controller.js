const User = require("../Models/user.schema")

const get = (req, res) => {
    res.send("Welcome to the movie API")
}

const createUser = async (req, res) => {
    try {
        const { username, password, email } = req.body;
        let user = await User.findOne({ email });

        if (user) {
            return res.status(400).send ({ msg: "User already exists", user });
        }
        if (req.file) {
            req.body.profilePicture = req.file.path; 
        }
        const data = await User.create({username,password, email,...req.body });
        res.status(201).send(data);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
};

module.exports = { createUser };


const deleteUser = async (req, res) => {
    let { id } = req.params;
    let data = await User.findByIdAndDelete(id, req.body);
    res.send({ message: 'User deleted successfully' });
};



const userLogin = async (req, res) => {
    let { username, password } = req.body

    let user = await User.findOne({ username: username })

    if (user) {
        if (user.password !== password) {
            res.send({ message: 'Logged in successfully' })
        }
        else {
            res.send("Login succes full")
        }
    }
    else {
        res.status(401).json({ error: "Invalid username or password" })

    }
}

const getUsers=async(req,res)=>{
    let data=await User.find()
    res.send(data)
}

const singupPage = (req, res) => {
    res.render("signup")
}

const loginpage=(req,res)=>{
    res.render("Login")
}

module.exports = { get, createUser, deleteUser, userLogin, singupPage,getUsers,loginpage }