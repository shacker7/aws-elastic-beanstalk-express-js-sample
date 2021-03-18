const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('It is getting late we should go to sleep Zzzzz..Zzzz..'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
