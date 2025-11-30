import express from 'express';
import authRouter from './routes/auth.js';
import 'dotenv/config';

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use('/auth', authRouter);

app.listen(port, () => {
  console.log(`Port on ${port}`);
});
