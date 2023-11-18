const express = require('express');
const fs = require('fs');

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);
const app = express();
app.use(express.json());
// app.get('/', (req, res) => {
//   res
//     .status(200) //when no status, 200 is the default
//     .json({ message: 'Hello from the server side', app: 'kgexplore' });
// });

// app.post('/', (req, res) => {
//   res.send('You can POST to this point...');
// });

app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: {
      tours,
    },
  });
});

app.post('/api/v1/tours', (req, res) => {
  //console.log(req.body);
  const newID = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newID }, req.body);
  tours.push(newTour);
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: {
          tour: newTour,
        },
      });
    }
  );
});
const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
