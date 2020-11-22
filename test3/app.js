const express = require('express')
const bodyParser = require('body-parser')
const { check, validationResult } = require('express-validator')

const app = express()
const port = 5000


app.set('view engine', 'ejs')

const urlencodedParser = bodyParser.urlencoded({ extended: false})

app.get('', (req, res) => {
    res.render('index')
})

app.get('/register', (req, res) => {
    res.render('register')
})

app.post('/register', urlencodedParser, (req, res) => {
    res.json(req.body)
})

app.listen(port, () => console.info(`App listening on port: ${port}`))