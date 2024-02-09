const express = require('express');
const app = express();
const port = 9090;

app.get('/', (req, res) => {
  res.send('Hey now youre an all star! Get your game on go play!!!!!!!!!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
