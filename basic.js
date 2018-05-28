const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()
app.use(cookieParser())

app.get('/', function (req, res) {
  res.send(`
    <h1>cookies 👇</h1>
    <div>${JSON.stringify(req.cookies, null, 2)}</div>
    <hr/>
    <a href="/create-cookie">create cookie</a>
    <a href="/remove-cookie">remove cookie</a>
  `)
})

app.get('/create-cookie', function (req, res) {
  res.cookie('some-key', 'some-value')
  res.redirect('/')
})

app.get('/remove-cookie', function (req, res) {
  res.clearCookie('some-key')
  res.redirect('/')
})


app.listen(3003, function () {
  console.log('listening on: http://127.0.0.1:3003/')
})
