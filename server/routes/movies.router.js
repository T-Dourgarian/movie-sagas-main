const express = require('express');
const axios = require('axios')
const pool = require('../modules/pool');
const router = express.Router();

// return all favorite images
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


module.exports = router;
