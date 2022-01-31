import express from 'express';

const app = express();
const node = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Welcome to Express TS');
});

app.listen(port, () => {
  console.info(`Server ${node} started on http://localhost:${port}`);
});
