const Movie = require("../Models/movie.schema");

const createMovie = async (req, res) => {
    let movie = await movie.create(req.body)
    res.send("data")
}

const updateMovie = async (req, res) => {
    let { id } = req.params
    let data = await Movie.findByIdAndUpdate(id, req.body)
    res.status(200), send("updated movie data")
}

const deleteMovie = async (req, res) => {
    let { id } = req.params;
    let data = await User.findByIdAndDelete(id, req.body);
    res.send({ message: 'movie deleted successfully' });
}


const updateMovieRating = async (req, res) => {
    try {
        const { id } = req.params;
        const { rating } = req.body;
        const movie = await Movie.findByIdAndUpdate(id, { $set: { rating } }, { new: true });

        if (!movie) {
            return res.status(404).send({ error: "Movie not found" });
        }

        res.send(Rating); 
    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
};


const addCommentToMovie = async (req, res) => {
    try {
        const { id } = req.params;
        const { comment } = req.body;
        const movie = await Movie.findByIdAndUpdate(id, { $push: { comments: comment } }, { new: true });

        if (!movie) {
            return res.status(404).send({ error: "Movie not found" });
        }

        res.send(Comment); 
    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
};


const filterMovies = async (req, res) => {
    try {
        let query = {};

       
        if (req.query.title) {
            query.title = { $regex: req.query.title, $options: "i" }; 
        }
        if (req.query.addedBy) {
            query.addedBy = req.query.addedBy;
        }
        if (req.query.releaseDate) {
            query.releaseDate = req.query.releaseDate;
        }
        if (req.query.category) {
            query.category = req.query.category;
        }

        
        const movies = await Movie.find(query);

        res.send(movies); 
    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
};


module.exports = { createMovie, updateMovie, deleteMovie,updateMovieRating,addCommentToMovie ,filterMovies}