/**
 * NodeJs server for deploying application to Heroku
 */

const express = require('express');
const PORT = process.env.PORT || 3000;

const app = express();
const distFolder = `${__dirname}/dist`;

app.use(express.static(`${distFolder}`));

app.get('/', (req, res) => {
    res.sendFile(`${distFolder}/index.html`);
})

app.listen(PORT, () => {
    console.log(`Deploy server listening on port ${PORT}`);
});