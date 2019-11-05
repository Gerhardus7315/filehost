const Nexmo = require('nexmo');
const nexmo = new Nexmo({
  apiKey: '658efcd2',
  apiSecret: '0DDt5sIOlzQuk7oH',
  applicationId: '9e912281-adea-4675-bed5-8eb50c171124',
  privateKey: 'private.key',
});
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
  send_message(nexmo);
  console.log("calling");
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})


const ncco = [
  {
    "action": "stream",
    "streamUrl": [
      "https://github.com/Gerhardus7315/filehost/raw/master/public/audio/recording.wav"
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

function send_message(nexmo) {
  var NEXMO_FROM_NUMBER = '12013711694';
  var NEXMO_TO_NUMBER = '27744098603';
  var message = 'Gerrie wil weet of jy saam met hom sal gaan piekniek?'
  nexmo.message.sendSms(
    NEXMO_FROM_NUMBER, NEXMO_TO_NUMBER, message, {type: 'unicode'},
    (err, responseData) => {if (responseData) {console.log(responseData)}}
  );
}
