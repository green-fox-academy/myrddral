// node.js
// inicializálni új projektet (package.json)
// express telepítése

import express from 'express'; // import express server module
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname (fileURLToPath(import.meta.url));

const app = express(); // start express server
const port = 3000; // set port to 3000

app.set('view engine', 'ejs'); // EJS template használata

app.use((express.static('public'))); // serves files from the 'public' folder

app.use(('/static', express.static(path.resolve(__dirname + '/public')))); // serves files from the 'public' folder at /static endpoint

app.get('/myFirstEndpoint', (req, res) => {  // /myFirstEndpoint endpoint created
    res.send('My first endpoint responded!');
});

app.get('/endpointWithQueryString', (req, res) => {
    let html = '<ul>';

    for (let key in req.query) {
        html += `<li>${ key}: ${req.query[key]}</li>`;
    }
    html += '</ul>';

    res.send(html);
});

app.listen(port, () => {
    console.log(`server listens on port ${port}`);
});