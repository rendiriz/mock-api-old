import express from 'express';
import cors from 'cors';
import http from 'http';

const app = express();
const node = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 3000;
const server = http.createServer(app);
const options: cors.CorsOptions = {
  origin: '*',
};

app.use(cors(options));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.status(200).json({
    error: false,
    message: 'Welcome to Express Esbuild API',
    data: {},
  });
});

server.listen(port, () => {
  console.info(`Server ${node} started on http://localhost:${port}`);
});
