const express = require('express');
const axios = require('axios')
const pool = require('../modules/pool');
const router = express.Router();

// return all movies
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM movies`

    pool.query(queryText)
        .then(result => {
            res.send(result.rows)
        })
        .catch(error => {
            console.log("ERROR IN GET",error); 
        })
});

router.post('/details/:id',(req,res) => {
    const queryText = `SELECT title,poster,description,ARRAY_AGG(name) as genre_array FROM movies_genres
     JOIN movies ON movies.id=movies_genres.movie_id 
     JOIN genres ON genres.id=movies_genres.genre_id
     WHERE movies_genres.movie_id=$1
     GROUP BY title,description,poster;`;
    console.log(req.params.id);
    pool.query(queryText,[req.params.id])
        .then(result => {
            console.log(result.rows);
            res.send(result.rows);
        })
        .catch(error => {
            console.log(error);
            res.sendStatus(500);
        })
})

module.exports = router;
