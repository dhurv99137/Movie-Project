
const isValid = (req, res, next) => {
    let { username, password, email } = req.body
    if (!username || !password || !email) {
        res.status(400).send({error: "all fields are required"})
    }
    else{
        next()
    }
}

module.exports=isValid