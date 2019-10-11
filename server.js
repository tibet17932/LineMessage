const express = require('express')
const app = express()
const port = process.env.PORT || 4000
app.post('/webhook', (req, res) => res.sendStatus(200))
app.listen(port, () => {
    console.log("Express Listening at http://localhost:" + port);
});