/**
 * NodeJs server for deploying application to Heroku
 */

const express = require('express');
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static(`${__dirname}/dist/index.html`));

app.listen(PORT, () => {
    console.log(`Deploy server listening on port ${PORT}`);
});