const express = require('express');
const axios = require('axios');

const CONSTANTS = require('./constants');

const router = express.Router();

// Nomo Page Endpoint
router.get(CONSTANTS.ENDPOINT.NOMO, (req, res) => {
  axios.get(`http://dev.mondonomo.com/nomographicAPI?name=${req.query.name}`).then((response) => {
    console.log("data from api", response.data);
    res.json(response.data);
  })
  .catch(err => res.json({}));
});

module.exports = router;
