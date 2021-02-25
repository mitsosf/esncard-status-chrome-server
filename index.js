const express = require('express')
const app = express()
const axios = require('axios')
const cors = require('cors')

app.get('/:esncard', cors(), (req, res, next) => {
    axios.get('https://esncard.org/services/1.0/card.json?code=' + req.params.esncard)
        .then(result => {
            let data = result.data[0]
            console.log(data)
            if (data === undefined) {
                res.json({msg: 'Invalid ESNcard', data: undefined, error: 404})
            }

            res.json({msg: 'Success', data: data, error: undefined})
        })
        .catch(error => {
            console.log(error)
        })
})

app.listen(3000, function () {
    console.log('Web server listening on port 3000')
})