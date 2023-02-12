const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("hải đăng");
})

app.get('/dang', (req, res) => {
    res.send("hải đăng 123");
})

app.listen(port, () => {
    console.log(`${port} is listening ....`)
})