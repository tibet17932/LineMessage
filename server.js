const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const app = express()
const port = process.env.PORT || 4000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

function reply(reply_token) {
    let headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer {' + reply_token + '}'
    }
    let body = JSON.stringify({
        replyToken: reply_token,
        messages: [{
                type: 'text',
                text: 'Hello'
            },
            {
                type: 'text',
                text: 'How are you?'
            }
        ]
    })
    request.post({
        url: 'https://api.line.me/v2/bot/message/reply',
        headers: headers,
        body: body
    }, (err, res, body) => {
        console.log('status = ' + res.statusCode);
    });
}

app.post('/webhook', (req, res) => {
    reply('qAVj2qs962bjNUi/E+OL0jCSCga9/SqZ+t1ut91/TgNjiHVGRlT+w3cz0wz6QADyqv/xErRQ64Jy4EADFHDSTbgfYSonU68ILNFuZCOR1qozv9Fse4ooawDZBGDCLLQnBax6O3JS8/ZIXtJHUMudsAdB04t89/1O/w1cDnyilFU=')
    res.sendStatus(200)
})


app.listen(port, () => {
    console.log("Express Listening at http://localhost:" + port);
});