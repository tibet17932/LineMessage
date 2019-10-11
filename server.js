const express = require('express')
const app = express()
const port = process.env.PORT || 4000

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
        body: body
    }, (err, res, body) => {
        console.log('status = ' + res.statusCode);
    });
}

app.post('/webhook', (req, res) => {
    reply('1netWmnzxvhZesGJmg5VRlYRQfJfLuTvI/vSvV3OL2flF9sBBw8UAk/IhDBGL/MBqv/xErRQ64Jy4EADFHDSTbgfYSonU68ILNFuZCOR1qrVmjuWtU4d72qABRKqy0c9jqp4ETewuoVX+PzxWkFwxAdB04t89/1O/w1cDnyilFU=')
    res.sendStatus(200)
})


app.listen(port, () => {
    console.log("Express Listening at http://localhost:" + port);
});