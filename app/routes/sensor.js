const express = require('express')
const { getData, postData } = require('../controller/sensor')
const router = express.Router()

router.get('/data', (req,res) => {
    getData({req,res})
})
router.post('/data', (req,res) => {
    postData(req,res)
})

module.exports = router