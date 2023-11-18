const express = require('express');

const app = express();

// app.get('/', (req, res) => {
//   res
//     .status(200) //when no status, 200 is the default
//     .json({ message: 'Hello from the server side', app: 'kgexplore' });
// });

// app.post('/', (req, res) => {
//   res.send('You can POST to this point...');
// });

app.get('/api/v1/tours', (req, res) => {
  res.send();
});
const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
