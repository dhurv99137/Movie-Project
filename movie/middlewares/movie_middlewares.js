
const movieValid = (req, res, next) => {
    let { title, description, releaseDate, category, actors, comments, addedBy } = req.body
    if (!title || !description || !releaseDate || !category || !actors || !comments || !addedBy) {
        res.status(400).send({ error: "all fields are required" })
    }
    else {
        next()
    }
}

module.exports = movieValid