const express = require('express');
const app = express();
const port = 9090;

app.get('/', (req, res) => {
  res.send('Hello, Big World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
