const express = require('express');

const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  // res.send('<h1>Hello Express!</h1>');
  res.send({
    name: 'Pedro',
    surname: 'Pauleta'
  });
});
app.get('/about', (req, res) => {
  res.send('About Page');
});
app.get('/bad', (req, res) => {
  res.send('Error handling request');
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});