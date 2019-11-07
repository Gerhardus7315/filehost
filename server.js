const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')

const PORT = process.env.PORT || 5000
const app = express()

app.use(express.static(path.join(__dirname,'public')));
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.render('cover');
})

app.post('/login', function (req, res) {
  var name = req.body.name;
  name = name.trim();
  name = name.toLowerCase()
  console.log(name);
  if (name === "anika") {
    res.render('index');
  } else {
    res.render('cover');
  }
})

app.post('/yes', function (req, res) {
  console.log("She said yes mate!");
})

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`)
})
