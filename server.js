const express = require('express');
const bodyParser = require('body-parser');
const app = express()

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

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
  //call(nexmo,ncco);
  console.log("calling");
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})


const Nexmo = require('nexmo');
const nexmo = new Nexmo({
  apiKey: '658efcd2',
  apiSecret: '0DDt5sIOlzQuk7oH',
  applicationId: '9e912281-adea-4675-bed5-8eb50c171124',
  privateKey: 'private.key',
});
const ncco = [
  {
    "action": "stream",
    "streamUrl": [
      "https://raw.githubusercontent.com/Gerhardus7315/filehost/master/hof.mp3"
    ],
    "level" : "1"
  }
];
function call(nexmo, ncco){
  nexmo.calls.create(
    {
      to: [{ type: 'phone', number: '27825291299' }],
      from: { type: 'phone', number: '12013711694' },
      ncco,
    },
    (err, result) => {
      console.log(err || result);
    },
  );
}
