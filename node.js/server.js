const express = require('express');
const app = express();
const PORT = 1199;

app.get('/', (req, res) => {
  console.log('root');
  res.send('<h1>Welcome to my node app!</h1>');
});

console.log('Hello World!');

app.listen(PORT, () => console.log(`server has started on: ${PORT}`));