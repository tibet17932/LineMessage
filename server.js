const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const app = express()
const port = process.env.PORT || 4000
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

function reply(reply_token, msg) {
    let headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer {zaClGiD+ZEgcNeom4G6Vl/Acd1B6IjNnSwGJC5bDdl4ZjPxC00V9iTkqNRswf52Mqv/xErRQ64Jy4EADFHDSTbgfYSonU68ILNFuZCOR1qrp/cFE1qEjYvJNP9sYLksUcZjfL5lPI/TSM0/JvP1+nQdB04t89/1O/w1cDnyilFU=}'
    }
    let body = JSON.stringify({
        replyToken: reply_token,
        messages: [{
            type: 'text',
            text: msg
        }]
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
    let reply_token = req.body.events[0].replyToken
    let msg = req.body.events[0].message.text
    reply(reply_token, msg)
    res.sendStatus(200)
})

app.listen(port, () => {
    console.log("Express Listening at http://localhost:" + port);
});