const express = require('express');
const axios = require('axios')
const pool = require('../modules/pool');
const router = express.Router();

// return all movies
router.get('/', (req, res) => {
    const queryText = `SELECT movies.id,title,poster,description,ARRAY_AGG(genres.name) as genre_array FROM movies_genres 
    JOIN movies ON movies.id=movies_genres.movie_id 
    JOIN genres ON genres.id=movies_genres.genre_id
    GROUP BY movies.id,title,description,poster
    ORDER BY movies.id ASC`

    pool.query(queryText)
        .then(result => {
            res.send(result.rows)
        })
        .catch(error => {
            console.log("ERROR IN GET",error); 
        })
});

router.post('/details/:id',(req,res) => {
    const queryText = `SELECT movies.id,title,poster,description,ARRAY_AGG(name) as genre_array FROM movies_genres
     JOIN movies ON movies.id=movies_genres.movie_id 
     JOIN genres ON genres.id=movies_genres.genre_id
     WHERE movies_genres.movie_id=$1
     GROUP BY movies.id,title,description,poster
     ;`;
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

router.put('/edit/:id',(req,res) => {
    console.log(req.body);
    console.log(req.params.id);
    const queryText = `
    UPDATE movies
    SET title=$1,
    description=$2
    WHERE id=$3;`;
    pool.query(queryText,[req.body.title,req.body.description,req.params.id])
        .then(result => {
            res.send(200);
        })
        .catch(error => {
            console.log('Error in put',error);
            res.sendStatus(500);
        })
})

module.exports = router;
