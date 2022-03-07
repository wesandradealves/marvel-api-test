const express = require('express');
const path = require('path')
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('./dist/safra'))
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.sendFile('index.html',{root:__dirname})
});

app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});