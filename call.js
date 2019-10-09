const Nexmo = require('nexmo');

const nexmo = new Nexmo({
  apiKey: '658efcd2',
  apiSecret: '0DDt5sIOlzQuk7oH',
  applicationId: '9e912281-adea-4675-bed5-8eb50c171124',
  privateKey: 'voice-stream-audio-node/private.key',
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

nexmo.calls.create(
  {
    to: [{ type: 'phone', number: '27744098603' }],
    from: { type: 'phone', number: '12013711694' },
    ncco,
  },
  (err, result) => {
    console.log(err || result);
  },
);
